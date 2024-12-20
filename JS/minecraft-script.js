document.addEventListener('DOMContentLoaded', () => {
    // Animate gallery items on scroll
    const galleryItems = document.querySelectorAll('.gallery-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    galleryItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(item);
    });

    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Add hover effect to message box
    const messageBox = document.querySelector('.message-box');
    messageBox.addEventListener('mouseover', () => {
        messageBox.style.transform = 'scale(1.05)';
        messageBox.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    });
    messageBox.addEventListener('mouseout', () => {
        messageBox.style.transform = 'scale(1)';
        messageBox.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    });
});

