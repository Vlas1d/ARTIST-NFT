document.addEventListener('DOMContentLoaded', () => {
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('html').classList.add('webp');
        } else {
            document.querySelector('html').classList.add('no-webp');
        }
    });

    //--------------------MENU-BURGER-----------------------------------------------------------------------

    //$('.burger-button').on('click', function () {
    //    $('.mobile-menu').toggleClass('opened');
    //});

    const burger = document.querySelector('.burger-button');
    const mobMenu = document.querySelector('.mobile-menu');

    burger.addEventListener('click', function () {
        if (mobMenu.classList.contains('opened')) {
            mobMenu.classList.remove('opened');
        } else {
            mobMenu.classList.add('opened');
        }
    });

    //----------------------HEADER--------------------------------------------------------------------------

    const header_ = document.querySelector('header'); //Для елемента header
    const isLogin = document.querySelector('.isLogin'); //Для елемента header
    const isPremium = document.querySelector('.isPremium');

    const premiumButton = document.querySelector('header .premium-button');
    const accountButton = document.querySelector('header .account-button');
    const nfts = document.querySelector('.lock-category');

    function premiumChanges() {
        console.log('premiumChanges');
        if (header_.classList.contains('isLogin') && header_.classList.contains('isPremium')) {
            premiumButton.classList.add('button_opacity');
            premiumButton.classList.remove('button_gradient');

            nfts.classList.add('active');
            nfts.querySelector('span').classList.add('gradient-text');
        } else {
            premiumButton.classList.add('button_gradient');
            premiumButton.classList.remove('button_opacity');

            nfts.classList.remove('active');
            nfts.querySelector('span').classList.remove('gradient-text');
        }
    }

    function loginChanges(role) {
        if (header_.classList.contains('isLogin')) {
            accountButton.querySelector('span').innerText = 'Personal cabinet';
            accountButton.setAttribute('href', goToPersonalCab(role));
        } else {
            accountButton.querySelector('span').innerText = 'Authorization';
            accountButton.setAttribute('href', 'authorization.html');
        }
    }

    const goToPersonalCab = role => {
        switch (role) {
            case 'admin':
                return '/personal-cabinet-owner.html';
                break;
            case 'customer':
                return '/personal-cabinet-client.html';
                break;
            case 'artist':
                return '/personal-cabinet-worker.html';
                break;
            default:
                break;
        }
    };

    /* loginChanges();
    premiumChanges(); */

    {
        if (getCookie('isLogin')) {
            const user = JSON.parse(sessionStorage.getItem('user'));
            header_.classList.add('isLogin');
            loginChanges(user.role);

            if (user.premium) {
                header_.classList.add('isPremium');
                premiumChanges();
            }
        }
    }

    const observer = new MutationObserver(function (mutations) {
        // Перевіряємо, чи є зміни у href атрибуті елемента
        mutations.forEach(function (mutation) {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class' &&
                mutation.target === header_
            ) {
                loginChanges();
                premiumChanges();
            }
        });
    });

    // Починаємо спостереження за змінами у DOM-структурі
    observer.observe(header_, { attributes: true });
    //-------------------------------------------------------------------------------------------------------
});
