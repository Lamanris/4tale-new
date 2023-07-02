// Burger Menu
// Header Burger
const headerBurger = document.querySelector('.header__burger')
const headerBurgerLink = document.querySelectorAll('.header-burger__link')
const body = document.querySelector('body')
if (headerBurger) {
    headerBurger.addEventListener ('click', () => {
        body.classList.toggle('burger')
    });
    headerBurgerLink.forEach((el) => {
        el.addEventListener('click', () => {
            body.classList.toggle('burger')
        })
    });
}

// Hero Slider
const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    navigation: {
        nextEl: '.hero-swiper-button-next',
        prevEl: '.hero-swiper-button-prev',
    },
    effect: "fade",
    speed: 500,
    allowTouchMove: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
});

// Nav Menu Dropdowns
$('.menu-item--dropdown').hover(function () {
    $(this).toggleClass('menu-item--dropdown--animated')
    if ($(this).hasClass('menu-item--dropdown--animated')) {
        $(this).addClass('menu-item--dropdown--active')
    } else {
        setTimeout(() => {
            $(this).removeClass('menu-item--dropdown--active')
        },100)
    }
})
$(document).on("click", function(e) {
    if ($(e.target).is(".menu-item--toggle") === false && $(e.target).is(".menu-item--panel__content") === false && $(e.target).is(".menu-item--panel-item") === false) {
        $('.menu-item--dropdown').removeClass('menu-item--dropdown--animated')
        setTimeout(() => {
            $('.menu-item--dropdown').removeClass('menu-item--dropdown--active')
        },100)
    }
});

// Show Vacancy Apply Form
$('.vacancy-btn-apply').click(function () {
    $(this).addClass('vacancy-btn-apply--animated')
    setTimeout(() => {
        $(this).addClass('vacancy-btn-apply--hidden')
        $('.apply').addClass('apply--active')
        setTimeout(() => {
            $('.apply').addClass('apply--animated')
        },100)
    },300)
})
