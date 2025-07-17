// Main JavaScript file for website functionality

// Wait for header and footer to be loaded before initializing
document.addEventListener('headerFooterLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initScrollEffects();
    initSmoothScrolling();
    initAnimations();
    initAvailabilityForm();
    initContactForm();
    initParticles();
});

// Fallback initialization if header-footer-loader is not available
document.addEventListener('DOMContentLoaded', function() {
    // Check if header-footer-loader is loaded
    if (!window.HeaderFooterLoader) {
        // Initialize all functionality directly
        initMobileMenu();
        initScrollEffects();
        initSmoothScrolling();
        initAnimations();
        initAvailabilityForm();
        initContactForm();
        initParticles();
    }
});

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            const icon = document.querySelector('.mobile-menu-btn i');
            
            if (navMenu) navMenu.classList.remove('active');
            if (icon) icon.className = 'fas fa-bars';
        });
    });
}

// Header scroll effects
function initScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Availability form functionality
function initAvailabilityForm() {
    const form = document.getElementById('availability-form');
    const zipInput = document.getElementById('zipcode');
    const errorMessage = document.getElementById('error-message');

    if (!form || !zipInput || !errorMessage) return;

    // Format ZIP code input
    zipInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, ''); // Only allow digits
        if (this.value.length > 5) {
            this.value = this.value.slice(0, 5);
        }
        
        // Hide error message when user starts typing
        if (errorMessage.classList.contains('show')) {
            errorMessage.classList.remove('show');
            this.style.borderColor = '';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const zipCode = zipInput.value.trim();
        
        // Validate ZIP code
        if (!zipCode || zipCode.length !== 5 || !/^\d{5}$/.test(zipCode)) {
            showError('Please enter a valid 5-digit ZIP code');
            return;
        }

        // Check if providers are available for this ZIP code
        if (window.ProvidersDB && window.ProvidersDB.checkAvailability) {
            const providers = window.ProvidersDB.checkAvailability(zipCode);
            
            if (!providers || providers.length === 0) {
                showError('Sorry, no providers found for this ZIP code. Please try another ZIP code.');
                return;
            }
        }

        // Redirect to results page with ZIP code
        window.location.href = `pages/results.html?zip=${zipCode}`;
    });

    // Show error message function
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        zipInput.style.borderColor = '#ff6b6b';
    }

    // Hide error message when clicking outside
    document.addEventListener('click', function(e) {
        if (!form.contains(e.target)) {
            errorMessage.classList.remove('show');
        }
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for submitting your information! We will contact you soon with the best deals for your area.');
            this.reset();
        });
    }
}

// Particle effects
function initParticles() {
    const particlesContainer = document.querySelector('.bg-animation');
    if (!particlesContainer) return;
    
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.background = 'rgba(102, 126, 234, 0.1)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
    }
`;
document.head.appendChild(style);
