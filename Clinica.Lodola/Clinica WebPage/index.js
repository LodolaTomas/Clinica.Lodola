"use strict";

const header__menu = document.querySelector('.header__menu');
const nav__burger = document.querySelector('.nav__burger');
nav__burger.onclick = function () {
    this.classList.toggle('bactive');
    if(this.classList.contains('bactive')){
        header__menu.style.transform = 'translateY(0)';
    }else{
        header__menu.style.transform = 'translateY(calc(-100% - 160px))';
    }
}