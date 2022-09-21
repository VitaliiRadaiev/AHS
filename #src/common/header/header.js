{
    let header = document.querySelector('[data-header]');
    if (header) {
        let mobileMenu = document.querySelector('[data-mobile-menu]');
        let btnMobileMenuClose = document.querySelector('[data-action="close-mobile-menu"]');
        let burger = burgerHandler();


        burger.el.addEventListener('click', () => {
            mobileMenu.classList.toggle('mobile-menu--open');
            document.documentElement.classList.toggle('overflow-hidden');
            burger.toggle();
        })
        btnMobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu--open');
            document.documentElement.classList.remove('overflow-hidden');
            burger.close();
        })

        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 250);
        })


        let slideItems = document.querySelectorAll('.mobile-menu .menu-item-has-children');
        if (slideItems.length) {
            slideItems.forEach(item => {
                
                let title = item.querySelector('.menu__link');
                let subMenu = item.querySelector('.sub-menu');

                title.addEventListener('click', (e) => {
                    console.log(this.utils);
                    e.preventDefault();
                    title.classList.toggle('open');
                    this.utils.slideToggle(subMenu);

                    slideItems.forEach(i => {
                        if (i === item) return;

                        let title = i.querySelector('.menu__link');
                        let subMenu = i.querySelector('.sub-menu');

                        title.classList.remove('open');
                        this.utils.slideUp(subMenu);
                    })

                })
            })
        }
    }

    function burgerHandler() {
        let burger = document.querySelector('[data-burger]');
        if(burger) {
            let span1 = burger.querySelector('span:nth-child(1)');
            let span2 = burger.querySelector('span:nth-child(2)');
            let span3 = burger.querySelector('span:nth-child(3)');
            let span4 = burger.querySelector('span:nth-child(4)');
    
            return {
                el: burger,
                toggle() {
                    span1.classList.toggle('first');
                    span2.classList.toggle('second');
                    span3.classList.toggle('third');
                    span4.classList.toggle('fourth');
                },
                close() {
                    span1.classList.remove('first');
                    span2.classList.remove('second');
                    span3.classList.remove('third');
                    span4.classList.remove('fourth');
                },
                open() {
                    span1.classList.add('first');
                    span2.classList.add('second');
                    span3.classList.add('third');
                    span4.classList.add('fourth');
                }
            }
        }
    }
}


