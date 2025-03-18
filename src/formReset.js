// Reset all forms when the page loads
window.addEventListener('load', function() {
    // Get all forms on the page
    const forms = document.querySelectorAll('form');
    
    // Reset each form
    forms.forEach(form => {
        form.reset();
    });
});

// Reset forms after submission (for cases where page isn't refreshed)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        setTimeout(() => {
            form.reset();
        }, 1000); // Wait for 1 second after submission to reset
    });
});