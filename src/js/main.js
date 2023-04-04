const nft_slider = new Swiper('.nft-slider', {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    mousewheel: true,

    breakpoints: {
        1100: {
            spaceBetween: 30,
        },
        425: {
            spaceBetween: 16,
        }
    },
});