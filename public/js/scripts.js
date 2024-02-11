//Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//Hamburger Menu

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('hidden');
});

// Klik Diluar Hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != menu) {
        hamburger.classList.remove('hamburger-active');
        menu.classList.add('hidden');
    }
});

// Darkmode
const mode = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

mode.addEventListener('click', function () {
    if (mode.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
    }
});

// move toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    mode.checked = true;
} else {
    mode.checked = false;
}
