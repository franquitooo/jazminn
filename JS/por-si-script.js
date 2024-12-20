document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const button = section.querySelector('.section-button');
        button.addEventListener('click', () => {
            const isActive = section.classList.contains('active');
            
            // Cerrar todas las secciones
            sections.forEach(s => s.classList.remove('active'));
            
            // Si la sección no estaba activa, abrirla
            if (!isActive) {
                section.classList.add('active');
                
                // Animar los mensajes con un pequeño retraso entre cada uno
                const messages = section.querySelectorAll('.message');
                messages.forEach((message, index) => {
                    setTimeout(() => {
                        message.style.opacity = '1';
                        message.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        });
    });

});

