document.addEventListener('DOMContentLoaded', () => {
    let user;

    if (getCookie('isLogin')) {
        user = JSON.parse(sessionStorage.getItem('user'));
    }

    const arts = document.querySelector('.arts');
    const artsItem = document.querySelectorAll('.arts__item');

    if (user.premium == 'True') {
        arts.classList.add('isPremium');
        artsItem[6].classList.remove('arts__item_inactive');
    }

    const select = document.querySelectorAll('.order__select');
    const typeSelectList = document.querySelector('.order__select-list-type');
    const typeSelected = document.querySelector('.order__selected-type');
    const sizeSelectList = document.querySelector('.order__select-list-size');
    const sizeSelected = document.querySelector('.order__selected-size')
    const radioBtn = document.querySelectorAll('.order__color');

    const switchColor = index => {
        const radioActiveClass = 'order__color_active';

        radioBtn.forEach(elem => {
            elem.classList.contains(radioActiveClass)
                ? elem.classList.remove(radioActiveClass)
                : null;
        });

        radioBtn[index].classList.add(radioActiveClass);
    };

    radioBtn.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            switchColor(index);
        })
    })

    select[0].addEventListener('click', () => {
        console.log('click1');
        typeSelectList.classList.toggle('order__select-list_active');
    })
    typeSelectList.addEventListener('click', ({target}) => {
        typeSelected.innerHTML = target.innerHTML;
    })
    select[1].addEventListener('click', () => {
        console.log('click1');
        sizeSelectList.classList.toggle('order__select-list_active');
    })
    sizeSelectList.addEventListener('click', ({target}) => {
        sizeSelected.innerHTML = target.innerHTML;
    })
});
