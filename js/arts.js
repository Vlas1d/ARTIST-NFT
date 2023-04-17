document.addEventListener('DOMContentLoaded', () => {
    const arts = document.querySelector('.arts');
    const artsItem = document.querySelectorAll('.arts__item');

    if(getCookie('isLogin')) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if(user.premium == 'True'){
            arts.classList.add('isPremium');
            artsItem[1].classList.remove('arts__item_inactive')
        }
    }
})