'use strict';

//systeme de tab js
let links = document.querySelectorAll('.link-tab');
for(let link of links){
    link.addEventListener('click', linkTrigger)
}

function linkTrigger(event){

    //desactiver tous les liens actifs
    let list = event.currentTarget.closest('ul');
    let activeLinks = list.querySelectorAll('.link-tab--active');
    for(let activeLink of activeLinks){
        activeLink.classList.remove('link-tab--active');
    }

    let links = list.querySelectorAll('.link-tab');
    for(let linkTab of links){
        let tabId = linkTab.getAttribute('href');
        let tabElement = document.querySelector(tabId);
        tabElement.classList.add('hidden');
    }

    //marquer le lien cliqué comme actif //
    let clickedLink = event.currentTarget;
    clickedLink.classList.add('link-tab--active');

    //afficher le contenu lié au lien cliqué
    let contentId = clickedLink.getAttribute('href');
    let content = document.querySelector(contentId);
    content.classList.remove('hidden')
}