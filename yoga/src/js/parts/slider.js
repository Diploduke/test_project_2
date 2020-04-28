'use strict';

function slider() {

    // =============== СЛАЙДЕР ======================

    let slideIndex = 1,         // Показ слайда по умолчанию (первый)
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides (n) {   // Скрываем все (слайды, точки) и показываем один, 
                            // соответствующий slideIndex
    if (n > slides.length) {        // После последнего слайда (+) переходим на первый
        slideIndex = 1;            
    }

    if (n < 1) {
        slideIndex = slides.length; // После первого слайда (-) переходим на последний
    }

    slides.forEach((item) => item.style.display = 'none'); // Первый способ (перебор слайдов)
    // for (let i = 0; i <  slides.length; i++) {          // Второй способ
    //     slides[i].style.display = 'none';
    // }  
    dots.forEach((item) => item.classList.remove('dot-active'));    // Перебор точек
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');

    }

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    function currentSlides(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlides(i);
            }
        }
    });

}

module.exports = slider;