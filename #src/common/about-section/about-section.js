let gallerySider = document.querySelector('[data-slider="gallery-slider"]');
if(gallerySider) {
    let sliderData = new Swiper(gallerySider, {

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        pagination: {
        	el: gallerySider.querySelector('.swiper-pagination'),
        	clickable: true,
        },
        watchSlidesVisibility: true,
        navigation: {
            nextEl: gallerySider.querySelector('.slider-button--next'),
            prevEl: gallerySider.querySelector('.slider-button--prev'),
        },
    });
}