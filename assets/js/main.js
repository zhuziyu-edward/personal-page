/**
 * Main JavaScript File - Academic Homepage
 * Handles dynamic loading of components and sections
 */

// Configuration object
const config = {
    components: {
        header: 'components/header.html',
        footer: 'components/footer.html'
    },
    sections: {
        about: 'sections/about.html',
        contact: 'sections/contact.html',
        research: 'sections/research.html',
        education: 'sections/education.html',
        publications: 'sections/publications.html',
        experience: 'sections/experience.html'
    }
};

/**
 * Load an HTML component into a container
 * @param {string} url - URL of the HTML file to load
 * @param {string} containerId - ID of the container element
 * @returns {Promise}
 */
async function loadComponent(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}: ${response.status}`);
        }
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
        } else {
            console.warn(`Container #${containerId} not found`);
        }
    } catch (error) {
        console.error(`Error loading component from ${url}:`, error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `<div class="loading">Failed to load content. Please refresh the page.</div>`;
        }
    }
}

/**
 * Load all components and sections
 */
async function loadAllContent() {
    const loadPromises = [];

    // Load header
    if (document.getElementById('header-container')) {
        loadPromises.push(loadComponent(config.components.header, 'header-container'));
    }

    // Load all sections
    Object.entries(config.sections).forEach(([name, path]) => {
        const containerId = `${name}-container`;
        if (document.getElementById(containerId)) {
            loadPromises.push(loadComponent(path, containerId));
        }
    });

    // Load footer
    if (document.getElementById('footer-container')) {
        loadPromises.push(loadComponent(config.components.footer, 'footer-container'));
    }

    await Promise.all(loadPromises);
    
    // Initialize after content is loaded
    initializePage();
}

/**
 * Initialize page functionality after content loads
 */
function initializePage() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    observeSections();
}

/**
 * Observe sections for scroll animations
 */
function observeSections() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
}

/**
 * Toggle mobile navigation (if needed in future)
 */
function toggleMobileNav() {
    const nav = document.querySelector('.mobile-nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

/**
 * Copy email to clipboard
 */
function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
}

// Export functions for use in other scripts
window.AcademicSite = {
    loadComponent,
    loadAllContent,
    initializePage,
    toggleMobileNav,
    copyEmail,
    config
};
