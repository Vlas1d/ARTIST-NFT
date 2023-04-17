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

//--------------------------------------------------------------

const questions = document.querySelector('.questions');

const answersBox = document.querySelectorAll('.quest__answers');
const myAnswerBox = document.querySelectorAll('.quest__my-answer')
const answersButtons = document.querySelectorAll('.quest__buttons');

questions.addEventListener('click', function () {

});