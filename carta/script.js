let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.drink');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');

    const offset = -currentSlide * 100;
    document.querySelector('.carrossel-imagens').style.transform = `translateX(${offset}%)`;
}

function toggleMenu() {
    const listaDrinks = document.querySelector('.lista-drinks');
    listaDrinks.style.display = (listaDrinks.style.display === 'block') ? 'none' : 'block';
}


function goToSlide(drinkId) {
    const slides = document.querySelectorAll('.drink');
    const index = Array.from(slides).findIndex(slide => slide.id === drinkId);
    
    if (index !== -1) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');

        const offset = -currentSlide * 100;
        document.querySelector('.carrossel-imagens').style.transform = `translateX(${offset}%)`;
    }
}

document.querySelectorAll('.drink')[currentSlide].classList.add('active');
