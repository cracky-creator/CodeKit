'use strict';
let darkModeButton = document.querySelector('.btn--darkmode');
darkModeButton.addEventListener('click', darkModeCallback);

let activeTheme = localStorage.getItem('theme');
if(activeTheme == 'dark' || activeTheme == 'light'){
    document.body.setAttribute('data-theme', activeTheme);
}

function darkModeCallback() {
    let currentMode = document.body.getAttribute('data-theme');
    let systemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if((!currentMode && systemThemeDark) || currentMode == 'dark'){
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }else{
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}