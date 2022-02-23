"use strict";

const nav__burger = document.querySelector('.nav__burger');
const fadeElements = document.querySelectorAll('.has-fade');
nav__burger.onclick = function () {
    this.classList.toggle('bactive');
    if(this.classList.contains('bactive')){
        fadeElements.forEach((el) =>el.style.visibility = 'visible');
    }else{
        fadeElements.forEach((el) =>el.style.visibility = 'hidden');
    }
}