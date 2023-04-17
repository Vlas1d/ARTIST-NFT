const forum_slider = new Swiper('.forum-slider', {
    loop: true,
    slidesPerView: "auto",

    spaceBetween: 30,

    breakpoints: {
        200: {
            spaceBetween: 14,
        },
        768: {
            spaceBetween: 30,
        }
    },
});