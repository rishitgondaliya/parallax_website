// Smooth scrolling for navigation links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Check if the clicked link is "Privacy Policy" or "Terms of Services"
        if (href === '#privacy-policy' || href === '#terms-of-services') {
            // Refresh the page
            location.reload();
        } else {
            // Prevent default anchor behavior
            e.preventDefault();
            // Smooth scroll to the section
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize AOS with settings for animation to appear both on scroll up and down
AOS.init({
    duration: 1600, // Animation duration in milliseconds
    offset: 200,    // Offset (in pixels) from the original trigger point
    once: false     // Animation should appear both on scroll up and down
});
