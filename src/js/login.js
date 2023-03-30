document.addEventListener('DOMContentLoaded', () => {
    const authSwitch = document.querySelector('.authorization__switch');
    const authLogin = document.querySelector('.authorization__login');
    const authReg = document.querySelector('.authorization__registration');

    const loginForm = document.querySelector('.form__login');
    const regForm = document.querySelector('.form__registration');

    const formInfo = document.querySelectorAll('.form__info span');

    const switchAuth = isSwitch => {
        if (isSwitch) {
            authSwitch.classList.add('authorization__switch_active');
            authLogin.classList.remove('authorization__login_active');
            authReg.classList.add('authorization__registration_active');
            switchForm(isSwitch);
        } else {
            authSwitch.classList.remove('authorization__switch_active');
            authLogin.classList.add('authorization__login_active');
            authReg.classList.remove('authorization__registration_active');
            switchForm(isSwitch);
        }
    };

    const switchForm = isSwitch => {
        if (isSwitch) {
            loginForm.classList.remove('form_active');
            regForm.classList.add('form_active');
        } else {
            loginForm.classList.add('form_active');
            regForm.classList.remove('form_active');
        }
    };

    authSwitch.addEventListener('click', ({ target }) => {
        if (target.classList.contains('authorization__login')) {
            switchAuth(false);
        } else {
            switchAuth(true);
        }
    });

    formInfo.forEach(elem => {
        elem.addEventListener('click', ({target}) => {
            target.getAttribute('data-auth') == 'login' ? switchAuth(false) : switchAuth(true);
        });
    });
});
