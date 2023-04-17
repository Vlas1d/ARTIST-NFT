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
        elem.addEventListener('click', ({ target }) => {
            target.getAttribute('data-auth') == 'login' ? switchAuth(false) : switchAuth(true);
        });
    });

    const formLogin = document.querySelector('.form__login');
    const formReg = document.querySelector('.form__registration');

    const emailLogin = document.querySelector('#loginEmail');
    const passLogin = document.querySelector('#loginPassword');

    const roleReg = document.querySelectorAll('.form__fieldset input');
    const emailReg = document.querySelector('#registrationEmail');
    const passReg = document.querySelector('#registrationPassword');

    const goToPersonalCab = (cabinet) => {
        switch (cabinet) {
            case 'admin':
                document.location.href = '/personal-cabinet-owner.html'
                break;
            case 'customer':
                document.location.href = '/personal-cabinet-client.html'
                break;
            case 'artist':
                document.location.href = '/personal-cabinet-worker.html'
                break;
            default:
                break;
        }
    }

    formLogin.addEventListener('submit', async e => {
        e.preventDefault();

        const person = {
            email: emailLogin.value,
            passLogin: passLogin.value
        };

        await fetch(
            "https://api.apispreadsheets.com/data/hHp8vjTTDHUSCcBq/?query=select * from hHp8vjTTDHUSCcBq where email='" +
                person.email +
                "'"
        ).then(res => {
            if (res.status === 200) {
                res.json()
                    .then(data => {
                        const yourData = data;
                        if (yourData.data.length == 0) {
                            alert('There is no user with this email');
                        } else {
                            (async function () {
                                if (
                                    yourData.data[0].password ==
                                    (await digestPass(person.passLogin))
                                ) {
                                    alert('Authorisation completed');
                                    setCookie('isLogin', 'true');
                                    setCookie('email', yourData.data[0].email);
                                    goToPersonalCab(yourData.data[0].role);
                                } else {
                                    alert('Wrong password');
                                }
                            })();
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                console.log(res.status);
            }
        });
    });
    formReg.addEventListener('submit', async e => {
        e.preventDefault();

        const person = {
            data: {
                email: emailReg.value
            }
        };

        (async function () {
            person.data.password = await digestPass(passReg.value);
        })();
        roleReg.forEach(elem => {
            elem.checked ? (person.data.role = elem.id) : null;
        });

        await fetch(
            "https://api.apispreadsheets.com/data/hHp8vjTTDHUSCcBq/?query=select * from hHp8vjTTDHUSCcBq where email='" +
                person.data.email +
                "'"
        ).then(res => {
            if (res.status === 200) {
                res.json()
                    .then(data => {
                        const yourData = data;
                        if (yourData.data.length == 0) {
                            fetch('https://api.apispreadsheets.com/data/hHp8vjTTDHUSCcBq/', {
                                method: 'POST',
                                body: JSON.stringify(person)
                            }).then(res => {
                                if (res.status === 201) {
                                    switchAuth(false);
                                    switchForm(false);
                                    alert('Registration successful, log in to your account');
                                } else {
                                    alert('No luck registering, try again');
                                }
                            });
                        } else {
                            alert('Such mail already exists');
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                console.log(res.status);
            }
        });
    });

    async function digestPass(password) {
        const algo = 'SHA-256';

        // encode as (utf-8) Uint8Array
        const msgUint8 = new TextEncoder().encode(password);
        // hash the message
        const hashBuffer = await crypto.subtle.digest(algo, msgUint8);
        // convert buffer to byte array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        // convert bytes to hex string
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        return hashHex;
    }
});
