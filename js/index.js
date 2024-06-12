// header-menu

const buttonToggle = document.querySelector('[data-toggle]');
const mainHeader = document.querySelector('[data-header]');

buttonToggle.addEventListener('click', () => mainHeader.classList.toggle('is-open'));

// slider-pagination

const buttonsPagination = document.querySelectorAll('[data-button-pagination]');
const catalogSlides = document.querySelectorAll('[data-catalog-slide]');

let activeSlide = 0;

buttonsPagination.forEach((element, index) => {
    element.addEventListener('click', (evt) => {
        evt.preventDefault();

        catalogSlides[activeSlide].classList.remove('catalog-slider__content--active');
        buttonsPagination[activeSlide].classList.remove('catalog-slider__pagination-button--current');

        activeSlide = index;

        catalogSlides[activeSlide].classList.add('catalog-slider__content--active');
        buttonsPagination[activeSlide].classList.add('catalog-slider__pagination-button--current');
    });
});

// slick slider

jQuery(function () {
    $('.pretension-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autplay: false,
        infinite: false,
    });
});

const $slider = $('.pretension-slider');
const $buttonNext = $('slick-next');

const slidesCount = 3;
let currentSlide;
let sliderCounter = document.createElement('div');
sliderCounter.classList.add('pretension-slider__counter');

const updateSliderCounter = (slick, currentIndex) => {
    currentSlide = slick.slickCurrentSlide() + 1;
    $(sliderCounter).text(currentSlide + '/' + slidesCount)
};

$slider.on('init', (event, slick) => {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
});

$slider.on('afterChange', (event, slick, currentSlide) => {
    updateSliderCounter(slick, currentSlide);
});

$slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $(this).find('.slick-next').prop('disabled', nextSlide === slick.slideCount - 1);
});

$slider.slick();