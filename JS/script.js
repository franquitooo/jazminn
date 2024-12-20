document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.style.transitionDelay = `${Math.random() * 0.5}s`;
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.5 });
    document.querySelectorAll('.date-card, .reason-card, .timeline-item').forEach(el => observer.observe(el));

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Generate pixel plants
    const plantsContainer = document.querySelector('.plants-container');
    const plantTypes = ['plant1', 'plant2', 'plant3'];
    const plantCount = 15;

    for (let i = 0; i < plantCount; i++) {
        const plant = document.createElement('div');
        plant.classList.add('plant', plantTypes[Math.floor(Math.random() * plantTypes.length)]);
        plant.style.left = `${Math.random() * 100}%`;
        plant.style.animationDelay = `${Math.random() * 2}s`;
        plantsContainer.appendChild(plant);
    }

    // Floating hearts animation
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '&hearts;';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.querySelector('.floating-hearts').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createFloatingHeart, 300);
});

