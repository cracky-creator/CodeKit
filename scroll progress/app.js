'use strict';
window.addEventListener("scroll", scrollListener);
const progressBar = document.querySelector('.progress-bar');

function scrollListener(event) {
  let maxscroll = document.body.scrollHeight - window.innerHeight;
  let currentScroll = window.scrollY;
  let readPercentage = (currentScroll / maxscroll) * 100;
  progressBar.style.width = readPercentage+"%";
}


