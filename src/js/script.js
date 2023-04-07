function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

    if (support == true) {
        document.querySelector('html').classList.add('webp');
    } else {
        document.querySelector('html').classList.add('no-webp');
    }
});

//--------------------MENU-BURGER-----------------------------------------------------------------------

$('.burger-button').on('click', function () {
    $('.mobile-menu').toggleClass('opened');
});

//----------------------HEADER--------------------------------------------------------------------------

const isLogin = document.querySelector(".isLogin"); //Для елемента header
const isPremium = document.querySelector(".isPremium");

const premiumButton = document.querySelector("header .button_gradient");
const nfts = document.querySelector(".lock-category");

if (isPremium != null && isLogin != null) {
    premiumButton.classList.add("button_opacity");
    premiumButton.classList.remove("button_gradient");

    nfts.classList.add("active");
    nfts.querySelector("span").classList.add("gradient-text");
}

//-------------------------------------------------------------------------------------------------------