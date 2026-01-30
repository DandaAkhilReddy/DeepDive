/**
 * HHA Investigation Report - Charts Module
 * Chart.js configurations for data visualization
 */

// Timeline data - 90 days of email deletion activity
const timelineData = [
    { date: '2025-11-06', deletions: 9, status: 'normal' },
    { date: '2025-11-07', deletions: 6, status: 'normal' },
    { date: '2025-11-08', deletions: 3, status: 'normal' },
    { date: '2025-11-09', deletions: 3, status: 'normal' },
    { date: '2025-11-10', deletions: 10, status: 'normal' },
    { date: '2025-11-11', deletions: 8, status: 'normal' },
    { date: '2025-11-12', deletions: 9, status: 'normal' },
    { date: '2025-11-13', deletions: 9, status: 'normal' },
    { date: '2025-11-14', deletions: 10, status: 'normal' },
    { date: '2025-11-15', deletions: 3, status: 'normal' },
    { date: '2025-11-16', deletions: 3, status: 'normal' },
    { date: '2025-11-17', deletions: 6, status: 'normal' },
    { date: '2025-11-18', deletions: 7, status: 'normal' },
    { date: '2025-11-19', deletions: 9, status: 'normal' },
    { date: '2025-11-20', deletions: 10, status: 'normal' },
    { date: '2025-11-21', deletions: 3, status: 'normal' },
    { date: '2025-11-22', deletions: 7, status: 'normal' },
    { date: '2025-11-23', deletions: 1, status: 'normal' },
    { date: '2025-11-24', deletions: 10, status: 'normal' },
    { date: '2025-11-25', deletions: 5, status: 'normal' },
    { date: '2025-11-26', deletions: 8, status: 'normal' },
    { date: '2025-11-28', deletions: 6, status: 'normal' },
    { date: '2025-11-29', deletions: 2, status: 'normal' },
    { date: '2025-12-01', deletions: 17, status: 'normal' },
    { date: '2025-12-02', deletions: 10, status: 'normal' },
    { date: '2025-12-03', deletions: 14, status: 'normal' },
    { date: '2025-12-04', deletions: 17, status: 'normal' },
    { date: '2025-12-05', deletions: 12, status: 'normal' },
    { date: '2025-12-06', deletions: 1, status: 'normal' },
    { date: '2025-12-07', deletions: 8, status: 'normal' },
    { date: '2025-12-08', deletions: 20, status: 'elevated' },
    { date: '2025-12-09', deletions: 23, status: 'elevated' },
    { date: '2025-12-10', deletions: 10, status: 'normal' },
    { date: '2025-12-11', deletions: 8, status: 'normal' },
    { date: '2025-12-12', deletions: 14, status: 'normal' },
    { date: '2025-12-13', deletions: 6, status: 'normal' },
    { date: '2025-12-14', deletions: 1, status: 'normal' },
    { date: '2025-12-15', deletions: 8, status: 'normal' },
    { date: '2025-12-16', deletions: 12, status: 'normal' },
    { date: '2025-12-17', deletions: 10, status: 'normal' },
    { date: '2025-12-18', deletions: 14, status: 'normal' },
    { date: '2025-12-19', deletions: 10, status: 'normal' },
    { date: '2025-12-20', deletions: 3, status: 'normal' },
    { date: '2025-12-21', deletions: 1, status: 'normal' },
    { date: '2025-12-22', deletions: 6, status: 'normal' },
    { date: '2025-12-23', deletions: 9, status: 'normal' },
    { date: '2025-12-24', deletions: 4, status: 'normal' },
    { date: '2025-12-25', deletions: 1, status: 'normal' },
    { date: '2025-12-26', deletions: 4, status: 'normal' },
    { date: '2025-12-27', deletions: 4, status: 'normal' },
    { date: '2025-12-28', deletions: 4, status: 'normal' },
    { date: '2025-12-29', deletions: 11, status: 'normal' },
    { date: '2025-12-30', deletions: 17, status: 'normal' },
    { date: '2025-12-31', deletions: 1, status: 'normal' },
    { date: '2026-01-01', deletions: 3, status: 'normal' },
    { date: '2026-01-02', deletions: 3, status: 'normal' },
    { date: '2026-01-03', deletions: 1, status: 'normal' },
    { date: '2026-01-04', deletions: 3, status: 'normal' },
    { date: '2026-01-05', deletions: 9, status: 'normal' },
    { date: '2026-01-06', deletions: 14, status: 'normal' },
    { date: '2026-01-07', deletions: 13, status: 'normal' },
    { date: '2026-01-08', deletions: 8, status: 'normal' },
    { date: '2026-01-09', deletions: 5, status: 'normal' },
    { date: '2026-01-10', deletions: 5, status: 'normal' },
    { date: '2026-01-11', deletions: 1, status: 'normal' },
    { date: '2026-01-12', deletions: 11, status: 'normal' },
    { date: '2026-01-13', deletions: 11, status: 'normal' },
    { date: '2026-01-14', deletions: 10, status: 'normal' },
    { date: '2026-01-15', deletions: 7, status: 'normal' },
    { date: '2026-01-16', deletions: 5, status: 'normal' },
    { date: '2026-01-17', deletions: 2, status: 'normal' },
    { date: '2026-01-18', deletions: 3, status: 'normal' },
    { date: '2026-01-19', deletions: 7, status: 'normal' },
    { date: '2026-01-20', deletions: 10, status: 'normal' },
    { date: '2026-01-21', deletions: 7, status: 'normal' },
    { date: '2026-01-22', deletions: 11, status: 'normal' },
    { date: '2026-01-23', deletions: 11, status: 'normal' },
    { date: '2026-01-24', deletions: 4, status: 'normal' },
    { date: '2026-01-25', deletions: 2, status: 'normal' },
    { date: '2026-01-26', deletions: 11, status: 'normal' },
    { date: '2026-01-27', deletions: 1304, status: 'critical' },
    { date: '2026-01-28', deletions: 0, status: 'normal' },
    { date: '2026-01-29', deletions: 5, status: 'normal' },
    { date: '2026-01-30', deletions: 505, status: 'critical' }
];

// Color configuration
const chartColors = {
    normal: '#74b9ff',
    elevated: '#fdcb6e',
    critical: '#e53935',
    normalBorder: '#0984e3',
    elevatedBorder: '#f39c12',
    criticalBorder: '#c62828'
};

/**
 * Get bar color based on status
 */
function getBarColor(status) {
    switch (status) {
        case 'critical': return chartColors.critical;
        case 'elevated': return chartColors.elevated;
        default: return chartColors.normal;
    }
}

/**
 * Get border color based on status
 */
function getBorderColor(status) {
    switch (status) {
        case 'critical': return chartColors.criticalBorder;
        case 'elevated': return chartColors.elevatedBorder;
        default: return chartColors.normalBorder;
    }
}

/**
 * Format date for display
 * Note: Adding T12:00:00 to avoid timezone issues where dates shift by one day
 */
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T12:00:00');
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * Format date for table display
 * Note: Adding T12:00:00 to avoid timezone issues where dates shift by one day
 */
function formatDateFull(dateStr) {
    const date = new Date(dateStr + 'T12:00:00');
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Initialize the main activity chart (for dashboard)
 */
function initActivityChart() {
    const ctx = document.getElementById('activityChart');
    if (!ctx) return;

    // Get recent 30 days for the dashboard view
    const recentData = timelineData.slice(-30);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: recentData.map(d => formatDate(d.date)),
            datasets: [{
                label: 'Emails Deleted',
                data: recentData.map(d => d.deletions),
                backgroundColor: recentData.map(d => getBarColor(d.status)),
                borderColor: recentData.map(d => getBorderColor(d.status)),
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const idx = context[0].dataIndex;
                            return formatDateFull(recentData[idx].date);
                        },
                        label: function(context) {
                            const idx = context.dataIndex;
                            const data = recentData[idx];
                            let label = `${data.deletions} emails deleted`;
                            if (data.status === 'critical') {
                                label += ' (CRITICAL)';
                            } else if (data.status === 'elevated') {
                                label += ' (Elevated)';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Emails Deleted'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                }
            }
        }
    });
}

/**
 * Initialize full 90-day timeline chart
 */
function initFullTimelineChart() {
    const ctx = document.getElementById('fullTimelineChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: timelineData.map(d => formatDate(d.date)),
            datasets: [{
                label: 'Emails Deleted',
                data: timelineData.map(d => d.deletions),
                backgroundColor: timelineData.map(d => getBarColor(d.status)),
                borderColor: timelineData.map(d => getBorderColor(d.status)),
                borderWidth: 1,
                borderRadius: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const idx = context[0].dataIndex;
                            return formatDateFull(timelineData[idx].date);
                        },
                        label: function(context) {
                            const idx = context.dataIndex;
                            const data = timelineData[idx];
                            let label = `${data.deletions} emails deleted`;
                            if (data.status === 'critical') {
                                label += ' (CRITICAL)';
                            } else if (data.status === 'elevated') {
                                label += ' (Elevated)';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Emails Deleted'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Date (November 2025 - January 2026)'
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45,
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                }
            }
        }
    });
}

/**
 * Initialize comparison donut chart for incidents page
 */
function initComparisonChart(chartId, incidentValue, label) {
    const ctx = document.getElementById(chartId);
    if (!ctx) return;

    const normalAverage = 8; // Average normal daily deletion

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [label, 'Normal Average'],
            datasets: [{
                data: [incidentValue, normalAverage],
                backgroundColor: [chartColors.critical, chartColors.normal],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} emails`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * Generate timeline table rows
 */
function generateTimelineTable() {
    const tbody = document.getElementById('timeline-tbody');
    if (!tbody) return;

    // Sort by date descending (most recent first)
    const sortedData = [...timelineData].reverse();

    let html = '';
    sortedData.forEach(item => {
        const statusClass = item.status === 'critical' ? 'critical' : '';
        const statusBadge = item.status === 'critical'
            ? '<span class="badge badge-danger">CRITICAL</span>'
            : item.status === 'elevated'
            ? '<span class="badge badge-warning">ELEVATED</span>'
            : '<span class="badge badge-secondary">Normal</span>';

        html += `
            <tr class="${statusClass}">
                <td>${formatDateFull(item.date)}</td>
                <td><strong>${item.deletions.toLocaleString()}</strong></td>
                <td>${statusBadge}</td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

/**
 * Calculate statistics
 */
function getStatistics() {
    const total = timelineData.reduce((sum, d) => sum + d.deletions, 0);
    const normalDays = timelineData.filter(d => d.status === 'normal');
    const average = Math.round(normalDays.reduce((sum, d) => sum + d.deletions, 0) / normalDays.length);
    const criticalDays = timelineData.filter(d => d.status === 'critical');
    const criticalTotal = criticalDays.reduce((sum, d) => sum + d.deletions, 0);

    return {
        total,
        average,
        criticalTotal,
        criticalDays: criticalDays.length,
        normalDays: normalDays.length
    };
}

// Initialize charts when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts based on what's on the page
    initActivityChart();
    initFullTimelineChart();
    generateTimelineTable();

    // Initialize comparison charts if on incidents page
    if (document.getElementById('incident1Chart')) {
        initComparisonChart('incident1Chart', 1304, 'Jan 27');
    }
    if (document.getElementById('incident2Chart')) {
        initComparisonChart('incident2Chart', 505, 'Jan 30');
    }
});

// Export for use in other scripts
window.timelineData = timelineData;
window.getStatistics = getStatistics;
window.formatDateFull = formatDateFull;
