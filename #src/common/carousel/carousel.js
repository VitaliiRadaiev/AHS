{
    let carousels = document.querySelectorAll('[data-slider="carousel"]');
    if(carousels.length) {
        carousels.forEach(carousel => {
            let carouselSwiper = new Swiper(carousel.querySelector('.swiper'), {
                observer: true,
                observeParents: true,
                speed: 500,
                pagination: {
                    el: carousel.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: carousel.querySelector('.slider-button--next'),
                    prevEl: carousel.querySelector('.slider-button--prev'),
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 25,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                },
            });
        })
    }
}