#!/usr/bin/env python3
"""excel_to_json.py

A robust utility for converting *any* Excel workbook to JSON.

Key features
------------
* **Automatic field discovery** – every column in every selected sheet is preserved; no
  hard‑coded field list.
* **Multi‑sheet support** – convert one sheet or all sheets at once.
* **CLI interface** – simple `python excel_to_json.py data.xlsx -o data.json`.
* **Graceful error handling** – clear, actionable messages for missing files,
  unreadable sheets, and write‑permission issues.
* **Library‑friendly** – the core ``excel_to_json`` function can be imported and
  reused by other Python code.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, List, Mapping, Sequence

import pandas as pd


def _sanitise_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """Prepare *df* for JSON serialisation.

    * Ensure all column names are strings.
    * Convert NaN/NaT to None so they appear as ``null`` in JSON.
    """
    df = df.copy()

    # Guarantee str column names to avoid subtle bugs downstream.
    df.columns = [str(c) for c in df.columns]

    # Replace pandas NA types with None.
    df = df.where(pd.notna(df), None)

    return df


def excel_to_json(
    excel_path: str | Path,
    *,
    json_path: str | Path | None = None,
    sheet: str | int | Sequence[str | int] | None = None,
    orient: str = "records",
    indent: int | None = 2,
) -> Mapping[str, List[Dict[str, Any]]]:
    """Convert *excel_path* to JSON and optionally write to *json_path*.

    Parameters
    ----------
    excel_path
        Path to the ``.xlsx`` file.
    json_path
        If provided, the JSON output is written to this file; otherwise only the
        converted object is returned.
    sheet
        A single sheet name/index or an iterable of them. ``None`` (default)
        means *all sheets*.
    orient
        Any orientation supported by :py:meth:`pandas.DataFrame.to_json`
        (``'records'`` by default).
    indent
        Indentation level for the JSON file. ``None`` produces the most compact
        output.

    Returns
    -------
    dict
        Mapping of *sheet name* → *list of row dicts* (unless *orient* requests a
        different structure).
    """
    excel_path = Path(excel_path).expanduser().resolve()
    if not excel_path.exists():
        raise FileNotFoundError(f"Excel file not found: {excel_path}")
    if not excel_path.suffix.lower().startswith(".xls"):
        raise ValueError("Input file must be an .xls(x) spreadsheet")

    # Read the workbook. We purposely avoid engine='openpyxl' to let pandas pick
    # the best available reader.
    try:
        workbook = pd.read_excel(
            excel_path,
            sheet_name=sheet,
            dtype=object,  # do not coerce numeric strings
            engine=None,
        )
    except ValueError as exc:
        # Raised e.g. for an invalid sheet
        raise ValueError(
            f"Unable to read sheet(s) {sheet!r} from {excel_path.name}: {exc}"
        ) from exc

    # pandas returns either a single DataFrame or a dict of DataFrames
    if isinstance(workbook, pd.DataFrame):
        workbook = {workbook.columns.name or "Sheet1": workbook}

    json_data: Dict[str, Any] = {}
    for sheet_name, df in workbook.items():
        clean_df = _sanitise_dataframe(df)
        json_data[sheet_name] = json.loads(clean_df.to_json(orient=orient))

    if json_path is not None:
        json_path = Path(json_path).expanduser().resolve()
        try:
            with json_path.open("w", encoding="utf-8") as f:
                json.dump(json_data, f, ensure_ascii=False, indent=indent)
        except PermissionError as exc:
            raise PermissionError(
                f"Cannot write to {json_path}: {exc.strerror or exc}"
            ) from exc

    return json_data


def _build_arg_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="Convert any Excel workbook to JSON (all columns, all rows)."
    )
    p.add_argument("excel", help="Path to the input .xlsx/.xls file")
    p.add_argument(
        "-o",
        "--output",
        help="Output JSON file (defaults to <input>.json in the same directory)",
    )
    p.add_argument(
        "-s",
        "--sheet",
        action="append",
        help=(
            "Sheet(s) to convert. Can be used multiple times. Default: all sheets."
        ),
    )
    p.add_argument(
        "--orient",
        default="records",
        help="JSON orientation (passed to pandas.DataFrame.to_json)",
    )
    p.add_argument(
        "--no-indent",
        dest="indent",
        action="store_const",
        const=None,
        default=2,
        help="Produce minified JSON without whitespace",
    )
    return p


def main(argv: list[str] | None = None) -> None:
    args = _build_arg_parser().parse_args(argv)
    excel_path = Path(args.excel)
    json_path = Path(args.output) if args.output else excel_path.with_suffix(".json")

    try:
        excel_to_json(
            excel_path,
            json_path=json_path,
            sheet=args.sheet if args.sheet and len(args.sheet) > 1 else (args.sheet[0] if args.sheet else None),
            orient=args.orient,
            indent=args.indent,
        )
        print(f"✅ Successfully wrote JSON to {json_path}")
    except Exception as exc:  # pylint: disable=broad-except
        print(f"❌ Error: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":  # pragma: no cover
    main()
