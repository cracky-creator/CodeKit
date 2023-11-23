'use strict';
let prevButton = document.querySelector('.btn__prev');
let nextButton = document.querySelector('.btn__next');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

//navigation au clavier
document.addEventListener('keydown', keyboardListener);

function keyboardListener(event){
    if(event.code == 'ArrowLeft'){
        prevSlide();    
    }else if(event.code == 'ArrowRight'){
        nextSlide();
    }
}

function prevSlide() {
    let activeSlideEl = document.querySelector('.slider__el--show');
    let prevSlideEl = activeSlideEl.previousElementSibling;
    if(!prevSlideEl){
        prevSlideEl = activeSlideEl.parentNode.lastElementChild;
    }
    activeSlideEl.classList.remove('slider__el--show');
    prevSlideEl.classList.add('slider__el--show');

}

function nextSlide() {
    let activeSlideEl = document.querySelector('.slider__el--show');
    let nextSlide = activeSlideEl.nextElementSibling;
    if(!nextSlide){
        nextSlide = activeSlideEl.parentNode.firstElementChild;
    }
    activeSlideEl.classList.remove('slider__el--show');
    nextSlide.classList.add('slider__el--show');

}