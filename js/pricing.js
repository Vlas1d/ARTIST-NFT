const premiumYear = document.querySelector('.lvl-price__card_year');
const premiumMonth = document.querySelector('.lvl-price__card_month');

let angle = 94.78;
let intervalId = null;

if (window.innerWidth >= 920) {
    premiumYear.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
            angle += 3;
            if (angle >= 360) {
                angle = 0;
            }
            premiumYear.style.setProperty('--before-bg', `linear-gradient(${angle}deg, #75fff8 50%, #ff00f7 55%)`);
            console.log(angle);
        }, 15);
    });
    premiumYear.addEventListener('mouseleave', function () {
        clearInterval(intervalId);
        angle = 94.78;
        premiumYear.style.setProperty('--before-bg', `linear-gradient(${angle}deg, #00ADC5 9.27%, #AD7AFF 84.06%)`);
    });


    premiumMonth.addEventListener('mouseenter', function () {
        this.querySelector('.button').classList.add('button_black');
        this.querySelector('.button').classList.remove('button_gradient');
    });
    premiumMonth.addEventListener('mouseleave', function () {
        this.querySelector('.button').classList.add('button_gradient');
        this.querySelector('.button').classList.remove('button_black');
    });
}