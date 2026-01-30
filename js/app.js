/**
 * HHA Investigation Report - Main Application Module
 * Document viewer and general app functionality
 */

// Maximum rows to display in preview
const MAX_PREVIEW_ROWS = 100;

/**
 * Open document viewer modal
 * @param {string} filename - Name of the file to view
 */
function viewDocument(filename) {
    const modal = document.getElementById('document-modal');
    const modalFilename = document.getElementById('modal-filename');
    const modalDownload = document.getElementById('modal-download');
    const contentContainer = document.getElementById('document-content');

    // Update modal header
    modalFilename.textContent = filename;
    modalDownload.href = `documents/${filename}`;

    // Show loading
    contentContainer.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    // Show modal
    modal.classList.add('active');

    // Fetch and display the document
    fetch(`documents/${filename}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(content => {
            if (filename.endsWith('.csv')) {
                displayCSV(content, contentContainer);
            } else {
                displayText(content, contentContainer);
            }
        })
        .catch(error => {
            contentContainer.innerHTML = `
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-triangle"></i>
                    <div>
                        <strong>Unable to load file</strong><br>
                        ${error.message}. Please download the file instead.
                    </div>
                </div>
            `;
        });
}

/**
 * Display CSV content as a table
 * @param {string} content - CSV file content
 * @param {HTMLElement} container - Container element
 */
function displayCSV(content, container) {
    // Parse CSV using Papa Parse
    const results = Papa.parse(content, {
        header: true,
        skipEmptyLines: true
    });

    if (results.errors.length > 0) {
        container.innerHTML = `
            <div class="alert alert-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <div>Some parsing errors occurred. Displaying available data.</div>
            </div>
        `;
    }

    const data = results.data;
    const headers = results.meta.fields || Object.keys(data[0] || {});
    const totalRows = data.length;
    const displayRows = data.slice(0, MAX_PREVIEW_ROWS);

    let html = '';

    // Show row count notice if truncated
    if (totalRows > MAX_PREVIEW_ROWS) {
        html += `
            <div class="alert alert-info mb-2">
                <i class="fas fa-info-circle"></i>
                <div>
                    Showing first ${MAX_PREVIEW_ROWS} of ${totalRows.toLocaleString()} rows.
                    Download the file for complete data.
                </div>
            </div>
        `;
    }

    // Build table
    html += '<div class="table-responsive"><table class="table csv-table">';

    // Header row
    html += '<thead><tr>';
    headers.forEach(header => {
        html += `<th>${escapeHtml(header)}</th>`;
    });
    html += '</tr></thead>';

    // Data rows
    html += '<tbody>';
    displayRows.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
            const value = row[header] || '';
            html += `<td title="${escapeHtml(value)}">${escapeHtml(truncate(value, 50))}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody></table></div>';

    container.innerHTML = html;
}

/**
 * Display text content
 * @param {string} content - Text file content
 * @param {HTMLElement} container - Container element
 */
function displayText(content, container) {
    // Clean up any BOM or weird characters
    content = content.replace(/^\uFEFF/, '');

    // Limit preview length for very large files
    const maxChars = 50000;
    let truncated = false;

    if (content.length > maxChars) {
        content = content.substring(0, maxChars);
        truncated = true;
    }

    let html = '';

    if (truncated) {
        html += `
            <div class="alert alert-info mb-2">
                <i class="fas fa-info-circle"></i>
                <div>
                    Preview truncated. Download the file for complete content.
                </div>
            </div>
        `;
    }

    html += `<pre class="document-preview">${escapeHtml(content)}</pre>`;

    container.innerHTML = html;
}

/**
 * Close the document viewer modal
 */
function closeModal() {
    const modal = document.getElementById('document-modal');
    modal.classList.remove('active');
}

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
function truncate(text, maxLength) {
    if (typeof text !== 'string') return text;
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Close modal when clicking overlay background
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Print functionality for summary page
function printReport() {
    window.print();
}

// Export functions for global use
window.viewDocument = viewDocument;
window.closeModal = closeModal;
window.printReport = printReport;
