let ourProjectSlider = document.querySelector('[data-slider="our-projects-slider"]');
if(ourProjectSlider) {
    let sliderData = new Swiper(ourProjectSlider.querySelector('.swiper'), {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        speed: 500,
        loop: true,
        pagination: {
        	el: ourProjectSlider.querySelector('.swiper-pagination'),
        	clickable: true,
        },
        watchSlidesVisibility: true,
        navigation: {
            nextEl: ourProjectSlider.querySelector('.slider-button--next'),
            prevEl: ourProjectSlider.querySelector('.slider-button--prev'),
        },
    });
}