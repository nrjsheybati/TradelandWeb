var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "0": {
            slidesPerView: 1,
        },
        "768": {
            slidesPerView: 2.5,
        },
        "992": {
            slidesPerView: 3,
        },
        "1200": {
            slidesPerView: 3,
        },
        "1400": {
            slidesPerView: 3,
        }
    },
});