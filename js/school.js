document.addEventListener('DOMContentLoaded', () => {
    const access = document.querySelectorAll('.fees__item');
    const btns = document.querySelectorAll('.fees__btn');
    const select = document.querySelectorAll('.register__select-item');
    const navigation = document.querySelectorAll('.fees__navigation-item');

    const switchAccess = index => {
        access.forEach(elem => {
            elem.classList.contains('fees__item_active')
                ? elem.classList.remove('fees__item_active')
                : null;
        });
        access[index].classList.add('fees__item_active');
    };

    const switchSelect = index => {
        select.forEach(elem => {
            elem.classList.contains('register__select-item_active')
                ? elem.classList.remove('register__select-item_active')
                : null;
        });
        select[index].classList.add('register__select-item_active');
    };

    const switchNavigation = index => {
        navigation.forEach(elem => {
            elem.classList.contains('fees__navigation-item_active')
                ? elem.classList.remove('fees__navigation-item_active')
                : null;
        });
        navigation[index].classList.add('fees__navigation-item_active');
    };

    btns.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            switchAccess(index);
            switchSelect(index);
            switchNavigation(index);
        });
    });

    select.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            switchAccess(index);
            switchSelect(index);
            switchNavigation(index);
        });
    });

    navigation.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            switchAccess(index);
            switchSelect(index);
            switchNavigation(index);
        });
    });
});
