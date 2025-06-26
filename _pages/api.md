---
title: "Ribocentre Aptamer API"
layout: default
permalink: /api/
---

<script>
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    const idQuery = urlParams.get('id');
    const categoryQuery = urlParams.get('category');
    const typeQuery = urlParams.get('type');
    const limitQuery = parseInt(urlParams.get('limit')) || 0;
    const offsetQuery = parseInt(urlParams.get('offset')) || 0;
    
    // 只有当有查询参数时，才返回JSON数据
    const hasQueryParams = searchQuery || idQuery || categoryQuery || typeQuery || limitQuery > 0;
    
    if (!hasQueryParams) {
        // 没有查询参数，显示正常的文档页面
        return;
    }
    
    // 设置正确的Content-Type
    if (document.querySelector('meta[http-equiv="Content-Type"]')) {
        document.querySelector('meta[http-equiv="Content-Type"]').setAttribute('content', 'application/json; charset=utf-8');
    } else {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Type');
        meta.setAttribute('content', 'application/json; charset=utf-8');
        document.head.appendChild(meta);
    }

    // 加载数据并返回JSON
    fetch('{{ site.baseurl }}/apidata/sequences_cleaned.json')
        .then(response => response.json())
        .then(json => {
            let data = json.Sheet1 || json;
            const originalCount = data.length;
            
            let responseData = {
                success: true,
                message: "",
                query: {
                    search: searchQuery,
                    id: idQuery,
                    category: categoryQuery,
                    type: typeQuery,
                    limit: limitQuery,
                    offset: offsetQuery,
                    timestamp: new Date().toISOString(),
                    endpoint: "/api/"
                },
                statistics: {
                    total_in_database: originalCount,
                    filters_applied: [],
                    filtered_results: 0,
                    returned_results: 0
                },
                pagination: {
                    has_pagination: limitQuery > 0,
                    limit: limitQuery,
                    offset: offsetQuery,
                    has_next_page: false,
                    has_previous_page: offsetQuery > 0
                },
                data: []
            };

            try {
                // 应用过滤器并记录调试信息
                if (idQuery) {
                    data = data.filter(item => 
                        item.ID && item.ID.toString().toLowerCase().includes(idQuery.toLowerCase())
                    );
                    responseData.statistics.filters_applied.push(`ID contains "${idQuery}"`);
                }

                if (searchQuery) {
                    data = data.filter(item => {
                        return Object.values(item).some(value => 
                            value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
                        );
                    });
                    responseData.statistics.filters_applied.push(`Search for "${searchQuery}"`);
                }

                if (categoryQuery) {
                    data = data.filter(item => 
                        item.Category && item.Category.toString().toLowerCase().includes(categoryQuery.toLowerCase())
                    );
                    responseData.statistics.filters_applied.push(`Category contains "${categoryQuery}"`);
                }

                if (typeQuery) {
                    data = data.filter(item => 
                        item.Type && item.Type.toString().toLowerCase().includes(typeQuery.toLowerCase())
                    );
                    responseData.statistics.filters_applied.push(`Type contains "${typeQuery}"`);
                }

                // 记录过滤后的结果数
                const totalFiltered = data.length;
                responseData.statistics.filtered_results = totalFiltered;

                // 应用分页
                if (limitQuery > 0) {
                    const start = offsetQuery;
                    const end = start + limitQuery;
                    data = data.slice(start, end);
                    
                    // 更新分页信息
                    responseData.pagination.has_next_page = (offsetQuery + limitQuery) < totalFiltered;
                }

                responseData.statistics.returned_results = data.length;
                responseData.data = data;

                // 设置响应消息
                if (totalFiltered === 0) {
                    responseData.message = "No results found";
                    responseData.suggestions = [];
                    
                    if (searchQuery || idQuery || categoryQuery || typeQuery) {
                        responseData.suggestions = [
                            "Try a broader search term",
                            "Check spelling of your search query",
                            "Use partial matching instead of exact terms",
                            "Remove some filters to see more results",
                            "Browse all data: /api/ (no parameters)"
                        ];
                    } else {
                        responseData.suggestions = ["Database might be empty or unavailable"];
                    }
                } else {
                    if (limitQuery > 0) {
                        responseData.message = `Found ${totalFiltered} result(s), showing ${data.length} (page ${Math.floor(offsetQuery/limitQuery) + 1})`;
                    } else {
                        responseData.message = `Found ${totalFiltered} result(s)`;
                    }
                }

                // 如果没有应用任何过滤器，说明是获取所有数据
                if (responseData.statistics.filters_applied.length === 0) {
                    responseData.statistics.filters_applied.push("None (showing all data)");
                }

            } catch (error) {
                responseData = {
                    success: false,
                    message: "Error processing request",
                    error: error.message,
                    query: responseData.query,
                    statistics: {
                        total_in_database: originalCount,
                        error_occurred: true
                    },
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
                message: "Failed to load aptamer database",
                error: error.message,
                query: {
                    search: searchQuery,
                    id: idQuery,
                    category: categoryQuery,
                    type: typeQuery,
                    limit: limitQuery,
                    offset: offsetQuery,
                    timestamp: new Date().toISOString(),
                    endpoint: "/api/"
                },
                suggestions: [
                    "Check your internet connection",
                    "Verify the API endpoint is accessible",
                    "Try again in a few moments",
                    "Contact support if the problem persists"
                ],
                data: []
            };
            document.body.innerHTML = '<pre style="white-space: pre-wrap; word-wrap: break-word; font-family: Monaco, \'Lucida Console\', monospace; padding: 20px; margin: 0; background: #f8d7da; border: 1px solid #f5c6cb; color: #721c24; border-radius: 5px;">' + 
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

/* 文档页面样式 */
.api-docs {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
}

.api-docs h1 {
    color: #520049;
    border-bottom: 2px solid #520049;
    padding-bottom: 10px;
}

.api-docs h2 {
    color: #520049;
    margin-top: 30px;
}

.api-docs h3 {
    color: #666;
}

.api-docs code {
    background-color: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Monaco', 'Lucida Console', monospace;
}

.api-docs pre {
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 5px;
    padding: 15px;
    overflow-x: auto;
}

.api-docs table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
}

.api-docs th, .api-docs td {
    border: 1px solid #ddd;
    padding: 8px 12px;
    text-align: left;
}

.api-docs th {
    background-color: #520049;
    color: white;
}
</style>



<div class="api-docs">

# Ribocentre-Aptamer API Documentation

**Version:** 1.0  
**Last Updated:** June 20, 2025

## Overview

The Ribocentre-Aptamer platform provides a simple yet powerful API for programmatic access to our aptamer database. Our API is designed to support researchers in automated data retrieval and integration with existing research workflows.

**Key Features:**
- **Real-time Search Filtering**: Both HTML and JSON endpoints support URL-based search parameters
- **Dual Access Modes**: Interactive web interface (`/sequences/`) and dedicated JSON API (`/api/`)
- **Enhanced Debugging**: JSON responses include comprehensive query statistics and suggestions
- **Flexible Output**: HTML for human browsing, JSON for programmatic access

## Base URL

```
https://aptamer.ribocentre.org
```

## Sequences Database API

The primary API endpoint is built around our sequences page, which provides access to comprehensive aptamer sequence data.

### Primary Endpoints

```
GET /sequences/          # Interactive web interface with search filtering
GET /api/               # Dedicated JSON API endpoint
```

### Query Parameters

#### Search Functionality

Search across all fields in the aptamer database using a single search term. Both endpoints support real-time search filtering.

**Parameter:** `search`  
**Type:** String  
**Description:** Search across all aptamer fields (sequence, ligand, name, etc.)  
**Example:** `?search=thrombin`

```bash
# Example: Search for "thrombin" across all fields (HTML interface)
curl "https://aptamer.ribocentre.org/sequences/?search=thrombin"

# Example: Search via dedicated JSON API
curl "https://aptamer.ribocentre.org/api/?search=thrombin"
```

#### ID-based Filtering

Filter the database to show only specific aptamer entries by their unique identifier.

**Parameter:** `id`  
**Type:** String  
**Description:** Filter results to show only the aptamer with the specified ID  
**Example:** `?id=ATP_Szostak_1`

```bash
# Example: Get specific aptamer by ID (HTML interface)
curl "https://aptamer.ribocentre.org/sequences/?id=ATP_Szostak_1"

# Example: Get specific aptamer via JSON API
curl "https://aptamer.ribocentre.org/api/?id=ATP_Szostak_1"
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

Access the dedicated JSON API endpoint for programmatic access with enhanced debugging information.

**Endpoint:** `/api/`  
**Parameters:** All same parameters as `/sequences/` endpoint (search, id, category, type, limit, offset)  
**Format:** Always returns JSON with comprehensive response metadata

```bash
# Example: Search for ATP-related aptamers via JSON API
curl "https://aptamer.ribocentre.org/api/?search=ATP"

# Example: Get paginated results
curl "https://aptamer.ribocentre.org/api/?search=DNA&limit=10&offset=0"
```

### Response Format

#### HTML Response (Default)
The sequences endpoint returns data in HTML format with structured table content including complete aptamer information. When search parameters are provided, the HTML interface displays filtered results with a clear indication of the search query and result count, plus a link to clear the search and return to all data.

#### JSON Response Format
When using `format=json` parameter or the `/api/` endpoint, the response includes enhanced debugging information:

```json
{
  "success": true,
  "message": "Found 5 result(s)" | "No results found",
  "query": {
    "search": "ATP",
    "id": null,
    "category": null,
    "type": null,
    "timestamp": "2025-01-01T12:00:00.000Z",
    "endpoint": "/api/"
  },
  "statistics": {
    "total_in_database": 250,
    "filters_applied": ["Search for \"ATP\""],
    "filtered_results": 5,
    "returned_results": 5
  },
  "suggestions": [...],  // Only when no results found
  "data": [...]
}
```

#### Enhanced Features
- **Clear Status Messages**: "No results found" when search yields no results
- **Debugging Information**: Detailed query statistics and applied filters
- **Helpful Suggestions**: Guidance when no results are returned
- **Timestamp Tracking**: Request timing for debugging
- **Filter Tracking**: Shows exactly which filters were applied

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

Retrieve all aptamer data (HTML interface):
```
https://aptamer.ribocentre.org/sequences/
```

### Search Queries

Search for aptamers containing "thrombin" (returns filtered HTML results):
```
https://aptamer.ribocentre.org/sequences/?search=thrombin
```

Search with JSON response (sequences endpoint):
```
https://aptamer.ribocentre.org/sequences/?search=ATP&format=json
```

### JSON API Endpoint

Use the dedicated JSON API (always returns JSON):
```
https://aptamer.ribocentre.org/api/?search=ATP
```

Get paginated results:
```
https://aptamer.ribocentre.org/api/?search=DNA&limit=10&offset=0
```

### Filtered Queries

Retrieve specific aptamer by ID (HTML):
```
https://aptamer.ribocentre.org/sequences/?id=ATP_Szostak_1
```

Retrieve specific aptamer by ID (JSON):
```
https://aptamer.ribocentre.org/api/?id=ATP_Szostak_1
```

## CLI-Friendly Usage

### Using curl with enhanced debugging

```bash
# Search with detailed debugging info
curl -s "https://aptamer.ribocentre.org/api/?search=123" | jq .

# Check if search has results
curl -s "https://aptamer.ribocentre.org/api/?search=nonexistent" | jq '.message'
# Output: "No results found"

# Get statistics about your search
curl -s "https://aptamer.ribocentre.org/api/?search=ATP" | jq '.statistics'
# Shows: total_in_database, filters_applied, filtered_results, etc.

# Get suggestions when no results found
curl -s "https://aptamer.ribocentre.org/api/?search=xyz123" | jq '.suggestions'
```

### Response Status Check

```bash
# Check if request was successful
curl -s "https://aptamer.ribocentre.org/api/?search=ATP" | jq '.success'

# Get human-readable message
curl -s "https://aptamer.ribocentre.org/api/?search=ATP" | jq '.message'

# Count results
curl -s "https://aptamer.ribocentre.org/api/?search=ATP" | jq '.statistics.filtered_results'
```

### Error Handling Examples

```bash
# Handle no results case
result=$(curl -s "https://aptamer.ribocentre.org/api/?search=notfound")
if [[ $(echo "$result" | jq -r '.statistics.filtered_results') -eq 0 ]]; then
    echo "No aptamers found. Suggestions:"
    echo "$result" | jq -r '.suggestions[]'
fi
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

*本API文档旨在通过程序化数据访问支持全球研究社区推进适配体科学发展。*

</div> 