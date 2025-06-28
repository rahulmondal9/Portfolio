// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Google Maps Function
function openGoogleMaps() {
    const location = "Garhbeta, West Medinipur, West Bengal, India";
    const encodedLocation = encodeURIComponent(location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    
    // Add a smooth transition effect
    const locationElements = document.querySelectorAll('.location-item, .location-contact');
    locationElements.forEach(element => {
        element.style.transform = 'scale(0.95)';
        element.style.opacity = '0.7';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, 200);
    });
    
    // Open Google Maps in a new tab
    window.open(googleMapsUrl, '_blank');
}

// Email Function
function openEmail() {
    const email = "rahul425wy@gmail.com";
    const subject = "Hello Rahul - Portfolio Contact";
    const body = "Hi Rahul,\n\nI found your portfolio and would like to connect with you.\n\nBest regards,";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Add a smooth transition effect
    const emailElements = document.querySelectorAll('.email-item, .email-contact');
    emailElements.forEach(element => {
        element.style.transform = 'scale(0.95)';
        element.style.opacity = '0.7';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, 200);
    });
    
    // Open email client
    window.location.href = mailtoUrl;
}

// Phone Function
function openPhone() {
    const phoneNumber = "+918768963374";
    const telUrl = `tel:${phoneNumber}`;
    
    // Add a smooth transition effect
    const phoneElements = document.querySelectorAll('.phone-item, .phone-contact');
    phoneElements.forEach(element => {
        element.style.transform = 'scale(0.95)';
        element.style.opacity = '0.7';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, 200);
    });
    
    // Open phone dialer
    window.location.href = telUrl;
}

// Typing Animation
const typingTexts = [
    "Data Analyst",
    "Python Developer", 
    "Machine Learning Enthusiast",
    "Data Visualization Expert"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeEffect() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', typeEffect);

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Observe individual cards and elements
document.querySelectorAll('.education-card, .timeline-item, .skill-category, .achievement-card').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Floating elements parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yPos = -(scrolled * speed / 10);
        element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    setTimeout(() => {
        document.querySelector('.hero-text').classList.add('slide-in-left', 'visible');
        document.querySelector('.hero-image').classList.add('slide-in-right', 'visible');
    }, 300);
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.innerText;
        if (!isNaN(target)) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(timer);
                } else {
                    counter.innerText = Math.floor(current);
                }
            }, 20);
        }
    });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
});

heroObserver.observe(document.querySelector('.profile-stats'));

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Contact form functionality (if needed in the future)
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
        });
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    
    // Add stagger animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add stagger animation to education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add stagger animation to achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavLink();
}, 100));

// Add smooth transition for contact interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to all contact elements
    const contactElements = document.querySelectorAll('.detail-item, .contact-item');
    
    contactElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add visual feedback
            element.style.transform = 'scale(0.98)';
            element.style.transition = 'all 0.1s ease';
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        });
        
        // Add keyboard accessibility
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
        
        // Make elements focusable for keyboard navigation
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        
        // Set appropriate ARIA labels
        if (element.classList.contains('location-item') || element.classList.contains('location-contact')) {
            element.setAttribute('aria-label', 'Open location in Google Maps');
        } else if (element.classList.contains('email-item') || element.classList.contains('email-contact')) {
            element.setAttribute('aria-label', 'Send email');
        } else if (element.classList.contains('phone-item') || element.classList.contains('phone-contact')) {
            element.setAttribute('aria-label', 'Make phone call');
        }
    });
});