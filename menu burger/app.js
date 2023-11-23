'use strict';
const btn = document.querySelector('.menu-toggle');

btn.addEventListener('click', menuOpen);

function menuOpen() {
    document.body.classList.toggle('menu--open');
}

