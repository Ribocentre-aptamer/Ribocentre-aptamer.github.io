---
title: "Ribocentre Aptamer API"
layout: default
permalink: /api/
---

<script>
document.addEventListener('DOMContentLoaded', function() {
    // 设置正确的Content-Type
    if (document.querySelector('meta[http-equiv="Content-Type"]')) {
        document.querySelector('meta[http-equiv="Content-Type"]').setAttribute('content', 'application/json; charset=utf-8');
    } else {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Type');
        meta.setAttribute('content', 'application/json; charset=utf-8');
        document.head.appendChild(meta);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    const idQuery = urlParams.get('id');
    const categoryQuery = urlParams.get('category');
    const typeQuery = urlParams.get('type');
    const limitQuery = parseInt(urlParams.get('limit')) || 0;
    const offsetQuery = parseInt(urlParams.get('offset')) || 0;

    // 加载数据并返回JSON
    fetch('{{ site.baseurl }}/apidata/sequences_cleaned.json')
        .then(response => response.json())
        .then(json => {
            let data = json.Sheet1 || json;
            let responseData = {
                success: true,
                total: data.length,
                data: data,
                query: {
                    search: searchQuery,
                    id: idQuery,
                    category: categoryQuery,
                    type: typeQuery,
                    limit: limitQuery,
                    offset: offsetQuery
                }
            };

            try {
                // 应用过滤器
                if (idQuery) {
                    data = data.filter(item => 
                        item.ID && item.ID.toString().toLowerCase().includes(idQuery.toLowerCase())
                    );
                }

                if (searchQuery) {
                    data = data.filter(item => {
                        return Object.values(item).some(value => 
                            value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
                        );
                    });
                }

                if (categoryQuery) {
                    data = data.filter(item => 
                        item.Category && item.Category.toString().toLowerCase().includes(categoryQuery.toLowerCase())
                    );
                }

                if (typeQuery) {
                    data = data.filter(item => 
                        item.Type && item.Type.toString().toLowerCase().includes(typeQuery.toLowerCase())
                    );
                }

                // 应用分页
                const totalFiltered = data.length;
                if (limitQuery > 0) {
                    const start = offsetQuery;
                    const end = start + limitQuery;
                    data = data.slice(start, end);
                }

                responseData.filtered = totalFiltered;
                responseData.returned = data.length;
                responseData.data = data;

            } catch (error) {
                responseData = {
                    success: false,
                    error: error.message,
                    data: []
                };
            }

            // 清空页面内容并显示JSON
            document.body.innerHTML = '<pre style="white-space: pre-wrap; word-wrap: break-word; font-family: monospace; padding: 20px; margin: 0; background: #f5f5f5; border: none;">' + 
                JSON.stringify(responseData, null, 2) + '</pre>';
        })
        .catch(error => {
            const errorResponse = {
                success: false,
                error: 'Failed to load data: ' + error.message,
                data: []
            };
            document.body.innerHTML = '<pre style="white-space: pre-wrap; word-wrap: break-word; font-family: monospace; padding: 20px; margin: 0; background: #f5f5f5; border: none;">' + 
                JSON.stringify(errorResponse, null, 2) + '</pre>';
        });
});
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: monospace;
}
</style>



**Version:** 1.0  
**Last Updated:** January 1, 2025

## Overview

The Ribocentre-Aptamer platform provides a simple yet powerful API for programmatic access to our aptamer database. Our API is designed to support researchers in automated data retrieval and integration with existing research workflows.

## Base URL

```
https://aptamer.ribocentre.org
```

## Sequences Database API

The primary API endpoint is built around our sequences page, which provides access to comprehensive aptamer sequence data.

### Endpoint

```
GET /sequences/
```

### Query Parameters

#### Search Functionality

Search across all fields in the aptamer database using a single search term.

**Parameter:** `search`  
**Type:** String  
**Description:** Search across all aptamer fields (sequence, ligand, name, etc.)  
**Example:** `?search=123`

```bash
# Example: Search for "123" across all fields
curl "https://aptamer.ribocentre.org/sequences/?search=123"
```

#### ID-based Filtering

Filter the database to show only specific aptamer entries by their unique identifier.

**Parameter:** `id`  
**Type:** String  
**Description:** Filter results to show only the aptamer with the specified ID  
**Example:** `?id=123`

```bash
# Example: Get aptamer with ID "123"
curl "https://aptamer.ribocentre.org/sequences/?id=123"
```

#### JSON API Response

Get data in JSON format instead of HTML.

**Parameter:** `format`  
**Type:** String  
**Values:** `json`  
**Description:** Return data in JSON format  
**Example:** `?format=json`

```bash
# Example: Get search results in JSON format
curl "https://aptamer.ribocentre.org/sequences/?search=ATP&format=json"
```

#### Dedicated JSON API Endpoint

Access the dedicated JSON API endpoint for programmatic access.

**Endpoint:** `/api/`  
**Parameters:** All same parameters as `/sequences/` endpoint  
**Format:** Always returns JSON

```bash
# Example: Search for ATP-related aptamers via JSON API
curl "https://aptamer.ribocentre.org/api/?search=ATP"
```

### Response Format

The API returns data in HTML format with structured table content. The response includes:

- **Sequence Data**: Complete aptamer sequence information
- **Metadata**: Aptamer properties including length, GC content, affinity
- **Literature References**: Associated publications and PubMed links
- **Functional Information**: Target ligands and binding characteristics

### Data Fields

Each aptamer entry contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `ID` | String | Unique identifier for the aptamer |
| `Type` | String | Type classification (e.g., RNA, DNA) |
| `Category` | String | Functional category |
| `Named` | String | Aptamer name with link to detailed page |
| `Article name` | String | Associated research publication |
| `Ligand` | String | Target molecule or protein |
| `Ligand Description` | Text | Detailed description of the target |
| `CAS` | String | Chemical Abstracts Service number |
| `Sequence` | String | Nucleotide sequence (5' to 3') |
| `Length` | Integer | Sequence length in nucleotides |
| `GC Content` | Float | GC content percentage |
| `Affinity` | String | Binding affinity (Kd values) |
| `Year` | Integer | Year of discovery/publication |

## Usage Examples

### Basic Query

Retrieve all aptamer data:
```
https://aptamer.ribocentre.org/sequences/
```

### Search Query

Search for aptamers containing "123":
```
https://aptamer.ribocentre.org/sequences/?search=123
```

### Search with JSON Response

Get search results in JSON format:
```
https://aptamer.ribocentre.org/sequences/?search=ATP&format=json
```

### JSON API Endpoint

Use the dedicated JSON API:
```
https://aptamer.ribocentre.org/api/?search=ATP
```

### Filtered Query

Retrieve specific aptamer by ID:
https://aptamer.ribocentre.org/sequences/?id=ATP_Szostak_1
```

### Integration Example

Here's a simple Python script to fetch aptamer data:

```python
import requests
from bs4 import BeautifulSoup

def get_aptamer_data(aptamer_id=None):
    """
    Retrieve aptamer data from Ribocentre-Aptamer database
    
    Args:
        aptamer_id (str, optional): Specific aptamer ID to retrieve
    
    Returns:
        Parsed HTML content with aptamer data
    """
    base_url = "https://aptamer.ribocentre.org/sequences/"
    
    if aptamer_id:
        url = f"{base_url}?id={aptamer_id}"
    else:
        url = base_url
    
    response = requests.get(url)
    
    if response.status_code == 200:
        return BeautifulSoup(response.content, 'html.parser')
    else:
        raise Exception(f"API request failed: {response.status_code}")

# Example usage
try:
    # Get specific aptamer
    soup = get_aptamer_data("ATP-aptamer")
    
    # Parse table data
    table = soup.find('table', {'id': 'seqTable'})
    rows = table.find('tbody').find_all('tr')
    
    for row in rows:
        cells = row.find_all('td')
        print(f"Aptamer: {cells[4].text.strip()}")
        print(f"Sequence: {cells[9].text.strip()}")
        print(f"Ligand: {cells[6].text.strip()}")
        print("---")
        
except Exception as e:
    print(f"Error: {e}")
```

## Search Functionality

The sequences page also provides client-side search functionality that filters the displayed data in real-time. This search feature:

- Performs case-insensitive matching
- Searches across all data fields
- Provides instant results without page reload
- Supports partial matches

### Search Implementation

The search is implemented using JavaScript and filters data dynamically:

```javascript
// Example of how search filtering works
const searchTerm = "ATP";
const filteredData = allData.filter(row => {
    return row.some(cell => 
        cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
});
```

## Data Export

The sequences page provides export functionality for research use:

- **CSV Export**: Download filtered or selected data in CSV format
- **Selective Export**: Choose specific entries for export
- **Bulk Export**: Export all data with a single click

### Export Usage

1. Visit the sequences page
2. Apply any desired filters
3. Select specific rows (optional)
4. Click "Export Selected" to download CSV file

## Rate Limiting

Currently, there are no specific rate limits imposed on API usage. However, we request that users:

- Implement reasonable delays between requests
- Avoid automated scraping that could impact site performance
- Contact us for high-volume usage requirements

## Data Accuracy and Updates

- **Data Sources**: Our database is curated from peer-reviewed scientific literature
- **Update Frequency**: Database is updated regularly with new publications
- **Validation**: Data undergoes manual review and validation processes
- **Version Control**: Historical data versions are maintained

## Error Handling

### Common Response Codes

- **200 OK**: Successful request
- **404 Not Found**: Invalid endpoint or resource not found
- **500 Internal Server Error**: Server-side error

### Error Response Format

Errors are returned as HTML pages with appropriate HTTP status codes. For programmatic access, check the HTTP status code and handle accordingly.

## Best Practices

### For Researchers

1. **Cache Results**: Store frequently accessed data locally to reduce server load
2. **Batch Requests**: When possible, retrieve multiple records in single requests
3. **Error Handling**: Implement proper error handling for network issues
4. **Citation**: Always cite our database when using data in publications

### For Developers

1. **User-Agent**: Include a descriptive User-Agent header in requests
2. **Respect Robots.txt**: Follow our robots.txt guidelines
3. **Contact Us**: Reach out for high-volume usage or integration support

## Data Usage Guidelines

### Academic Use

- Data is provided freely for academic and research purposes
- Proper citation is required (see Terms of Use)
- No redistribution without permission

### Commercial Use

- Contact us for commercial usage licensing
- Separate terms may apply for commercial applications
- Revenue sharing is not required from users

## Integration Support

### Available Formats

Currently, data is available in:
- **HTML**: Structured table format with interactive features
- **CSV**: Export functionality for spreadsheet applications
- **JSON**: Backend data format (not directly accessible)

### Future Enhancements

Planned API improvements include:
- RESTful JSON API endpoints
- Advanced filtering parameters
- Bulk data access methods
- Real-time data notifications

## Support and Contact

### Technical Support

For API-related questions or technical issues:

**Email:** contact@ribocentre.org  
**Subject:** API Support - [Your Query]

### Documentation Updates

This documentation is updated regularly. For the latest information, please check:
- This page for current API features
- Our GitHub repository for technical updates
- Contact us for specific integration requirements

### Community

We encourage the research community to:
- Share integration examples
- Report bugs or suggest improvements
- Contribute to database curation efforts

## Changelog

### Version 1.0 (January 2025)
- Initial API documentation
- Basic URL parameter filtering
- Search and export functionality
- HTML-based data access

---

*This API documentation is designed to support the global research community in advancing aptamer science through programmatic data access.* 