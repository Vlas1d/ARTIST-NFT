//----------TIMER-----------------------------------------------------------------------

const timer = document.querySelector(".timer");

var countDownDate = new Date("April 30, 2023 23:59:59").getTime();

var x = setInterval(function () {
    var now = new Date().getTime(); //поточна дата/час

    var distance = countDownDate - now; //різниця в часі

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.querySelector(".timer__day").innerHTML = `${days}d`;
    timer.querySelector(".timer__hour").innerHTML = `${hours}h`;
    timer.querySelector(".timer__min").innerHTML = `${minutes}m`;
    timer.querySelector(".timer__sec").innerHTML = `${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

//--------------------------------------------------------------------------------------------

const mobileTitle = document.querySelector('.about-lot h2');

if (window.innerWidth < 768) {
    mobileTitle.innerText = "Title of picture or NFT";
}

//---------------------------------SLIDER------------------------------------------------------

const sliderBox = document.querySelector('.auction-slider__box');
const sliderContent = document.querySelector('.auction-slider__slide');
const sliderProgressbar = document.querySelector('.auction-slider__progress span');

var sliderProgress = 0;

function sliderProgressCalc() {
    sliderProgress = sliderBox.offsetHeight + sliderBox.getBoundingClientRect().top - sliderContent.getBoundingClientRect().top;
    sliderProgressbar.style.width = `${(sliderProgressbar.closest('.auction-slider__progress').offsetWidth * sliderProgress) / sliderContent.offsetHeight}px`;
}

sliderProgressCalc()

sliderBox.addEventListener('scroll', function () {
    sliderProgressCalc()
});