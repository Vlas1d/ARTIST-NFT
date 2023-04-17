document.addEventListener('DOMContentLoaded', () => {
    const cardNumber = new Cleave('.payment__card', {
        creditCard: true
    });
    const cardDate = new Cleave('.payment__date', {
        date: true,
        delimiter: '/',
        datePattern: ['m', 'y']
    });

    const navigationTab = document.querySelector('.payment__navigation');
    const navigationItem = document.querySelectorAll('.payment__navigation-item');
    const tabs = document.querySelectorAll('.payment__tab');

    const switchTab = (index) => {
        tabs.forEach(elem => {
            elem.classList.remove('payment__tab_active')
        })
        if(index == 2) {
            tabs[1].classList.add('payment__tab_active')
        } else if(index == 0) {
            tabs[0].classList.add('payment__tab_active');
        }
    } 

    const switchNav = index => {
        navigationItem.forEach(elem => {
            elem.classList.remove('payment__navigation-item_active')
        })
        navigationTab.classList.toggle('payment__navigation_active')
        if(index != 1) {
            navigationItem[index].classList.add('payment__navigation-item_active');
        }
    }

    navigationItem.forEach((elem, index) => {
        if(!elem.classList.contains('payment__navigation-item_disable')) {
            elem.addEventListener('click', () => {
                switchTab(index);
                switchNav(index);
            })
        } 
    })
});
