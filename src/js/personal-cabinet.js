document.addEventListener('DOMContentLoaded', () => {
    const asideTab = document.querySelectorAll('.aside__tab');
    const asideTabImg = document.querySelectorAll('.aside__img-hide');

    const removeActiveClassFromAsideTabImg = () => {
        asideTabImg.forEach(elem => {
            elem.classList.contains('aside__img-hide_active')
                ? elem.classList.remove('aside__img-hide_active')
                : null;
        });
    };

    asideTab.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            removeActiveClassFromAsideTabImg();
            asideTabImg[index].classList.toggle('aside__img-hide_active');
        });
    });

    const chat = document.querySelector('.chat');
    const chatList = document.querySelector('.chat-list');
    const chating = document.querySelector('.chating') 
    const msgContainer = document.querySelector('.messages');
    const chats = document.querySelectorAll('.chating__list-item');
    const chatBack = document.querySelector('.chat__back svg');

    const switchChat = () => {
        console.log('swith');
        chat.classList.toggle('chat_active');
        chatList.classList.toggle('chat-list_hide');
        chating.classList.toggle('chating_hide');
        msgContainer.classList.toggle('messages_active');
    }
    
    chats.forEach(elem => {
        elem.addEventListener('click', () => {
            console.log('click');
            switchChat();
        })
    })
    chatBack.addEventListener('click', () => {
        switchChat();
    })
});
