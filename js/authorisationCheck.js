document.addEventListener('DOMContentLoaded', async () => {
    if(getCookie('isLogin')) {
        await fetch(
            "https://api.apispreadsheets.com/data/hHp8vjTTDHUSCcBq/?query=select * from hHp8vjTTDHUSCcBq where email='" +
                getCookie('email') +
                "'",
        ).then(res => {
            if (res.status === 200){
                res.json().then(data => {
                    const yourData = data;
                    if (yourData.data.length == 0) {
                        alert('There is no user with this email');
                    } else {
                        sessionStorage.setItem('user', JSON.stringify({
                            premium: yourData.data[0].premium,
                            role: yourData.data[0].role
                        }))
                    }
                })
            }else {
                console.log(res.status);
            }
        })
    } else {
        console.log(false);
    }
})