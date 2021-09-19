let header = document.querySelector('.header-nav');

window.onscroll = function () {
    if (window.pageYOffset >= 100) {
        header.classList.add('header-border');
    } else {
        header.classList.remove('header-border');
    }
};