'use strict';

let lastScrollValue = 0;
const menu = document.querySelector('.menu');

window.document.addEventListener('scroll', scrollListener);

function scrollListener(){
  if(lastScrollValue > window.scrollY){
    menu.classList.remove('hidden')
  }else{
    menu.classList.add('hidden')
  }
  lastScrollValue = window.scrollY;

}



