document.addEventListener('DOMContentLoaded', () => {
    function animateHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '&hearts;';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }

    // Animación de corazones flotantes periódica
    setInterval(animateHearts, 3000);

    // Animación de entrada para las razones
    const razones = document.querySelectorAll('.razon-item');
    razones.forEach((razon, index) => {
        razon.style.animationDelay = `${index * 0.1}s`;
    });
});

