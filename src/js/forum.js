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

const answersBox = document.querySelectorAll('.quest__answers');
const myAnswerBox = document.querySelectorAll('.quest__my-answer')
const answersButtons = document.querySelectorAll('.quest__buttons');


answersButtons.forEach((element, index) => {
    element.querySelector('.button').addEventListener('click', () => {
        if (element.previousElementSibling.classList.contains('show')) {
            element.previousElementSibling.classList.remove('show');
            element.querySelector('.button > span').innerText = 'Show answers (23)';
        } else {
            element.previousElementSibling.classList.add('show');
            element.querySelector('.button > span').innerText = 'Hide answers (23)';
        }
    });
    element.querySelector('button:not(.button)').addEventListener('click', () => {
        if (element.nextElementSibling.classList.contains('show')) {
            element.nextElementSibling.classList.remove('show');
        } else {
            element.nextElementSibling.classList.add('show');
        }
    });
});