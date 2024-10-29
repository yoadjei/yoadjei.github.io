// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Click event for the "About Me" section
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.addEventListener('click', function() {
            alert("Thank you for your interest in learning more about me!");
        });
    }
});
