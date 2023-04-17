document.addEventListener('DOMContentLoaded', () => {
    const asideTab = document.querySelectorAll('.aside__tab');
    const asideTabImg = document.querySelectorAll('.aside__img-hide');
    const mainTab = document.querySelectorAll('.main__tab');

    const sidemenuTab = document.querySelectorAll('.sidemenu__list-item');
    const sidemenuTabImg = document.querySelectorAll('.sidemenu__img-hide');

    const removeActiveClassFromTabImg = () => {
        asideTabImg.forEach(elem => {
            elem.classList.contains('aside__img-hide_active')
                ? elem.classList.remove('aside__img-hide_active')
                : null;
        });
        asideTab.forEach(elem => {
            elem.classList.contains('aside__tab_active')
                ? elem.classList.remove('aside__tab_active')
                : null;
        });
        sidemenuTabImg.forEach(elem => {
            elem.classList.contains('sidemenu__img-hide_active')
                ? elem.classList.remove('sidemenu__img-hide_active')
                : null;
        });
    };
    const removeActiveClassFromMainTab = () => {
        mainTab.forEach(elem => {
            elem.classList.contains('main__tab_active')
                ? elem.classList.remove('main__tab_active')
                : null;
        });
    };
    const removeActiveClass = () => {
        removeActiveClassFromTabImg();
        removeActiveClassFromMainTab();
    };
    const addActiveClassForTab = index => {
        asideTabImg[index].classList.add('aside__img-hide_active');
        asideTab[index].classList.add('aside__tab_active');
        sidemenuTabImg[index].classList.add('sidemenu__img-hide_active');
    };

    asideTab.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            removeActiveClass();
            addActiveClassForTab(index);
            mainTab[index].classList.add('main__tab_active');
        });
    });

    sidemenuTab.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            removeActiveClass();
            addActiveClassForTab(index);
            mainTab[index].classList.add('main__tab_active');
            sidemenu.classList.remove('sidemenu_active');
        });
    });

    const chat = document.querySelector('.chat');
    const chatList = document.querySelector('.chat-list');
    const chating = document.querySelector('.chating');
    const msgContainer = document.querySelector('.messages');
    const chats = document.querySelectorAll('.chating__list-item');
    const chatBack = document.querySelector('.chat__back svg');

    const switchChat = () => {
        console.log('swith');
        chat.classList.toggle('chat_active');
        chatList.classList.toggle('chat-list_hide');
        chating.classList.toggle('chating_hide');
        msgContainer.classList.toggle('messages_active');
    };

    chats.forEach(elem => {
        elem.addEventListener('click', () => {
            console.log('click');
            switchChat();
        });
    });
    chatBack.addEventListener('click', () => {
        switchChat();
    });

    const burger = document.querySelector('.hamburger');
    const sidemenu = document.querySelector('.sidemenu');

    burger.addEventListener('click', () => {
        sidemenu.classList.toggle('sidemenu_active');
    });

    const btnExit = [document.querySelector('.header__exit'), document.querySelector('.sidemenu__exit'), document.querySelector('.aside__exit')];

    btnExit.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            deleteCookie('isLogin');
            deleteCookie('email');
            sessionStorage.removeItem('user');
            document.location.href = '/authorization.html';
        })
    })
});
