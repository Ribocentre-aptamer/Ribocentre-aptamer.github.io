import openpyxl
wb = openpyxl.load_workbook("apidata/structure-6.20.xlsx")
ws = wb.active

for row in ws.iter_rows():
    for cell in row:
        if cell.hyperlink:
            cell.value = f"{cell.value}: {cell.hyperlink.target}"
            cell.hyperlink = None  # 删掉链接对象
wb.save("apidata/structure-6.20clean.xlsx")