// Check system dark mode preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle project recommendation section
document.getElementById('recommendProjectLink').addEventListener('click', function(e) {
    e.preventDefault();
    const recommendSection = document.getElementById('recommend');
    recommendSection.classList.toggle('hidden');
    
    // Scroll to the section if it's being shown
    if (!recommendSection.classList.contains('hidden')) {
        recommendSection.scrollIntoView({ behavior: 'smooth' });
        
        // Trigger scroll reveal animation
        const reveals = recommendSection.querySelectorAll('.scroll-reveal');
        reveals.forEach(el => observer.observe(el));
    }
});

// Add scroll event listener to handle navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-400');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('text-blue-400');
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
});
