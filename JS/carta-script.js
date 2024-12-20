document.addEventListener('DOMContentLoaded', () => {
    // Crear flores flotantes
    const flowerContainer = document.querySelector('.flower-container');
    const flowerCount = 15;

    for (let i = 0; i < flowerCount; i++) {
        createFlower();
    }

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 10 + 10}s`;
        flower.style.animationDelay = `${Math.random() * 5}s`;
        flowerContainer.appendChild(flower);
    }

    // Efecto de aparición gradual para el contenido de la carta
    const cartaContent = document.querySelector('.carta-content');
    const parrafos = cartaContent.querySelectorAll('p');

    parrafos.forEach((parrafo, index) => {
        parrafo.style.opacity = '0';
        parrafo.style.transform = 'translateY(20px)';
        parrafo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        parrafo.style.transitionDelay = `${index * 0.2}s`;

        setTimeout(() => {
            parrafo.style.opacity = '1';
            parrafo.style.transform = 'translateY(0)';
        }, 100 + index * 200);
    });

    // Efecto hover para los iconos de decoración
    const decoracionIconos = document.querySelectorAll('.decoracion i');

    decoracionIconos.forEach(icono => {
        icono.addEventListener('mouseover', () => {
            icono.style.transform = 'scale(1.2) rotate(10deg)';
            icono.style.transition = 'transform 0.3s ease';
        });

        icono.addEventListener('mouseout', () => {
            icono.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

