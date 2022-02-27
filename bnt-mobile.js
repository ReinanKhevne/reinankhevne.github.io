var bntMobile = document.querySelector('#bnt-mobile')
bntMobile.addEventListener('click', togleeMenu)

    function togleeMenu() {
        var nav = document.querySelector('.nav')
        
        nav.classList.toggle('active')
    }