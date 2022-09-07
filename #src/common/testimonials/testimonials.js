let testimonialsSlider = document.querySelector('[data-slider="testimonials-slider"]');
if(testimonialsSlider) {
    let sliderData = new Swiper(testimonialsSlider.querySelector('.swiper'), {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        speed: 500,
        loop: true,
        pagination: {
        	el: testimonialsSlider.querySelector('.swiper-pagination'),
        	clickable: true,
        },
        watchSlidesVisibility: true,
        navigation: {
            nextEl: testimonialsSlider.querySelector('.slider-button--next'),
            prevEl: testimonialsSlider.querySelector('.slider-button--prev'),
        },
    });
}