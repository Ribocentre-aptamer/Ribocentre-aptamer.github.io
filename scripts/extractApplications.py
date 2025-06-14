import os, pathlib, json
import pandas as pd
from typing import Callable, List

def default_is_header(row: pd.Series, prev_row: pd.Series | None) -> bool:
    """一个经验规则：上一行全空，且本行至少 2 个非空字符串 => 认为是新表头"""
    if prev_row is None:
        return True  # 第一行也可能是表头
    prev_all_nan = prev_row.isna().all()
    # 本行有多少非空且看起来像字符串的单元格？
    non_empty_str = (row.apply(lambda x: isinstance(x, str) and str(x).strip() != "")).sum()
    return prev_all_nan and non_empty_str >= 2

def excel_to_json_multiheader(
        infile: str,
        out_dir: str = "./json_sections",
        n_sections_expected: int | None = 7,
        header_rows: List[int] | None = None,      # 明确指定表头所在行（以 0 为起点）
        is_header: Callable[[pd.Series, pd.Series | None], bool] = default_is_header,
        encoding: str = "utf-8"
):
    """
    识别一个 Excel 工作表中的多个子表（每段自带表头），并分别导出 JSON。

    参数
    ----
    infile       : Excel 文件路径
    out_dir      : 输出目录
    n_sections_expected : 期望切出多少段；仅用于 sanity check，None 则不检查
    header_rows  : 若知道确切表头行号，直接传列表；否则用 heuristic
    is_header    : 自定义“本行是否表头”的判定函数
    encoding     : 输出编码
    """
    df_raw = pd.read_excel(infile, header=None, dtype=object)  # 不让 pandas 自行当作表头
    pathlib.Path(out_dir).mkdir(parents=True, exist_ok=True)

    # 1. 找出所有表头行
    hdr_idxs: List[int] = []
    if header_rows:
        hdr_idxs = header_rows
    else:
        prev_row = None
        for idx, row in df_raw.iterrows():
            if is_header(row, prev_row):
                hdr_idxs.append(idx)
            prev_row = row

    if n_sections_expected and len(hdr_idxs) != n_sections_expected:
        print(f"⚠️  检测到 {len(hdr_idxs)} 个表头，但期望 {n_sections_expected} 段。请确认 heuristic 或显式传入 header_rows！")

    # 2. 追加一个“末尾哨兵”，方便切片
    hdr_idxs.append(len(df_raw))

    # 3. 逐段处理
    for i in range(len(hdr_idxs) - 1):
        start = hdr_idxs[i]
        end   = hdr_idxs[i + 1]
        header = df_raw.iloc[start].fillna("").astype(str).str.strip().tolist()
        body   = df_raw.iloc[start + 1 : end].copy()
        body.columns = header
        body = body.dropna(axis=0, how="all").reset_index(drop=True)

        # 去掉全空列 & 转掉列名里的非法字符
        body = body.dropna(axis=1, how="all")
        body.columns = [c.replace("\n", " ").strip() for c in body.columns]

        outfile = os.path.join(out_dir, f"section_{i+1}.json")
        body.to_json(outfile, orient="records", force_ascii=False, indent=2)
        print(f"✅ 写入 {outfile} （{len(body)} 行，{len(body.columns)} 列）")

if __name__ == "__main__":
    excel_to_json_multiheader(
        infile="application.xlsx",
        out_dir="./json_sections",
        n_sections_expected=7,
        # header_rows=[0, 18, 36, 54, 72, 90, 108],  # 若已知精确行号，可直接解注释
        # is_header=custom_func,                    # 如需自定义 heuristic
    )
