document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.floating-hearts');
    const colors = ['#ff9a9e', '#fad0c4', '#ffffff'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '♥';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});