const nft_slider = new Swiper('.nft-slider', {
    loop: true,
    slidesPerView: "auto",
    grabCursor: 'true', 
    //centeredSlides: true,
    //mousewheel: true,

    breakpoints: {
        1100: {
            centeredSlides: true,
            spaceBetween: 30,
        },
        600: {
            centeredSlides: true,
            spaceBetween: 20,
        },
        300: {
            centeredSlides: false,
            spaceBetween: 16,
        }
    },
});