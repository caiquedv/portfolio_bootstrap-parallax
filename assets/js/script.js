let headerSize = document.querySelector('header').clientWidth;
let menuArea = document.querySelector('nav');


if(headerSize < 768) {
    menuArea.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
};