/**
 * Dynamic Header and Footer Loader
 * This script loads header and footer HTML files dynamically into pages
 */

// Function to load HTML content
async function loadHTMLContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error('Error loading HTML content:', error);
        return '';
    }
}

// Function to load header
async function loadHeader() {
    const headerElement = document.getElementById('header-placeholder');
    if (headerElement) {
        // Determine if we're in a subdirectory
        const isInSubdirectory = window.location.pathname.includes('/pages/');
        const headerPath = isInSubdirectory ? '../assets/includes/header-pages.html' : 'assets/includes/header.html';
        
        const headerHTML = await loadHTMLContent(headerPath);
        headerElement.innerHTML = headerHTML;
        
        // Initialize mobile menu after header is loaded
        initializeMobileMenu();
    }
}

// Function to load footer
async function loadFooter() {
    const footerElement = document.getElementById('footer-placeholder');
    if (footerElement) {
        // Determine if we're in a subdirectory
        const isInSubdirectory = window.location.pathname.includes('/pages/');
        const footerPath = isInSubdirectory ? '../assets/includes/footer-pages.html' : 'assets/includes/footer.html';
        
        const footerHTML = await loadHTMLContent(footerPath);
        footerElement.innerHTML = footerHTML;
    }
}

// Function to initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Function to update navigation links based on current page
function updateNavigationLinks() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Update links for pages in subdirectories
        if (currentPage.includes('/pages/')) {
            if (href.startsWith('index.html')) {
                link.setAttribute('href', '../' + href);
            }
        }
    });
}

// Function to initialize the page
async function initializePage() {
    // Load header and footer
    await Promise.all([loadHeader(), loadFooter()]);
    
    // Update navigation links
    updateNavigationLinks();
    
    // Dispatch a custom event to indicate that header and footer are loaded
    document.dispatchEvent(new CustomEvent('headerFooterLoaded'));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Export functions for use in other scripts
window.HeaderFooterLoader = {
    loadHeader,
    loadFooter,
    initializePage
};
