let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Show the current slide
function showSlide(index) {
    // Reset all slides
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}vw)`; // Use 100vw to slide horizontally
    });
    
    // Update active dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Go to the previous slide
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

// Go to the next slide
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Click on dots to navigate
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Initial display
showSlide(currentIndex);
