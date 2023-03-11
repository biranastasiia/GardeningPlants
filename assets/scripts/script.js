'use strict'

// HEADER

const headerElement = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 80) {
        headerElement.classList.add('white-background');
    } else {
        headerElement.classList.remove('white-background');
    }
});

// BURGER MENU

const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.menu');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('open');
    headerMenu.classList.toggle('open');
})


// BANNER SLIDER

const swiperBanner = new Swiper('.banner-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        nextEl: '.banner-slider-button--next',
        prevEl: '.banner-slider-button--prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
})

// POPULAR SLIDER

const swiperPopular = new Swiper('.popular-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 34,
    navigation: {
        nextEl: '.popular-slider-button--next',
        prevEl: '.popular-slider-button--prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
})

// CUSTOM SLIDER

let offset = 0;
let slideCount = 0;
const btnPrev = document.querySelector('.testimonials-slider-button--prev');
const btnNext = document.querySelector('.testimonials-slider-button--next');
const sliderLine = document.querySelector('.testimonials-slider-line');
const sliderSlides = document.querySelectorAll('.testimonial-slide');
const sliderSlidesArray = Array.from(sliderSlides);

function findSlideOffset() {
    let slidesWidth = [];
    sliderSlides.forEach(slide => {
        slidesWidth.push(slide.offsetWidth)
    })
    const smallestSlide = Math.min(...slidesWidth);
    console.log(smallestSlide, 'smallestSlide')
    return smallestSlide
}

btnPrev.addEventListener('click', function () {
    const windowInnerWidth = window.innerWidth;
    const slideOffset = findSlideOffset();

    offset -= slideOffset;
    if (offset < slideOffset) {
        btnPrev.classList.add('disabled');
        btnNext.classList.remove('disabled');
    } else {
        btnPrev.classList.remove('disabled');
        btnNext.classList.remove('disabled');
    }
    sliderLine.style.left = -offset + "px";

    slideCount -= 1;
    sliderSlides.forEach(slide => {
        slide.classList.remove('prev');
        slide.classList.remove('active');
    });
    if (slideCount > 0) {
        sliderSlidesArray[slideCount-1].classList.add('prev');
    }
    sliderSlidesArray[slideCount].classList.add('active');
})

btnNext.addEventListener('click', function () {
    const windowInnerWidth = window.innerWidth;
    const slideOffset = findSlideOffset();

    offset += slideOffset;
    if (offset > slideOffset * 3) {
        btnNext.classList.add('disabled');
        btnPrev.classList.remove('disabled');
    } else {
        btnNext.classList.remove('disabled');
        btnPrev.classList.remove('disabled');
    }
    sliderLine.style.left = -offset + "px";

    slideCount += 1;
    sliderSlides.forEach(slide => {
        slide.classList.remove('prev');
        slide.classList.remove('active');
    });
    sliderSlidesArray[slideCount-1].classList.add('prev');
    sliderSlidesArray[slideCount].classList.add('active');
})

// FOOTER MENU

const footerMenuTitle = document.querySelectorAll('.footer-navigation__block-title');
footerMenuTitle.forEach(title => title.addEventListener('click', function () {
    title.parentElement.classList.toggle('open');
}))