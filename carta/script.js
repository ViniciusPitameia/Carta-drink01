let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.drink');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('.slide')[currentSlide].classList.add('active');
