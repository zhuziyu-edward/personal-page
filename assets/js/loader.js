/**
 * Loader Script - Initializes the page
 * This script runs immediately when the page loads
 */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Show loading state
    document.querySelectorAll('[id$="-container"]').forEach(container => {
        if (!container.innerHTML.trim()) {
            container.innerHTML = '<div class="loading">Loading...</div>';
        }
    });

    // Load all content
    if (window.AcademicSite) {
        window.AcademicSite.loadAllContent();
    } else {
        // Fallback: wait for main.js to load
        setTimeout(() => {
            if (window.AcademicSite) {
                window.AcademicSite.loadAllContent();
            }
        }, 100);
    }
});

// Handle errors gracefully
window.addEventListener('error', function(e) {
    console.error('Page error:', e.error);
});

// Log page load time
window.addEventListener('load', function() {
    const timing = performance.timing;
    const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
    console.log(`Page loaded in ${pageLoadTime}ms`);
});
