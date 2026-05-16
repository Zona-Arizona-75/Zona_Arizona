document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade');

    const checkScroll = () => {
        fadeElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                el.classList.add('visible');
            }
        });
    };

    // Ejecutar al cargar por si ya hay elementos visibles
    checkScroll();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', checkScroll);
});