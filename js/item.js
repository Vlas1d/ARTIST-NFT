document.addEventListener('DOMContentLoaded', () => {
    let user;

    if(getCookie('isLogin')) {
        user = JSON.parse(sessionStorage.getItem('user'));
    }
    
    const proccess = document.querySelector('.proccess');

    if(user.premium == 'True'){
        proccess.classList.add('isPremium');
    }
})