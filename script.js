// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Scroll animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe elements on page load
document.addEventListener('DOMContentLoaded', function() {
    // Observe section headers
    document.querySelectorAll('.section-header').forEach(el => observer.observe(el));
    
    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));
    
    // Observe contact links
    document.querySelectorAll('.contact-link').forEach(el => observer.observe(el));
    
    // Observe CTA card
    document.querySelectorAll('.cta-card').forEach(el => observer.observe(el));
    
    // Observe sections with stagger effect
    document.querySelectorAll('section').forEach((el, index) => {
        el.style.setProperty('--stagger-index', index);
        observer.observe(el);
    });
});