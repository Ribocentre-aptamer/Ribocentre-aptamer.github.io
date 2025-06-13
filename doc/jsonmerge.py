import json
import os

# Paths of the uploaded JSON files
file_paths = [
    "apidata/aptamer_cells.json",
    "apidata/aptamer_nucleic_acids.json",
    "apidata/aptamer_proteins.json",
    "apidata/aptamer_small_molecules.json"
]

# Read and concatenate all records
combined_records = []
for path in file_paths:
    with open(path, "r") as f:
        combined_records.extend(json.load(f))

# Output path for the merged file
output_path = "apidata/riboaptamer_merged.json"

# Write the combined list to a new JSON file with pretty formatting
with open(output_path, "w") as f_out:
    json.dump(combined_records, f_out, indent=2, ensure_ascii=False)

print(f"Merged {len(combined_records)} records into {output_path}")
