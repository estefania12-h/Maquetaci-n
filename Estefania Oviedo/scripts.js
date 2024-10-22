let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const slideWidth = slides.children[0].offsetWidth;
    const totalSlides = slides.children.length;

    // Actualizar el índice actual
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // Mover el carrusel
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
