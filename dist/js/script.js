$(document).ready(function(){
    const navBtn = document.querySelector('.nav__btn');
    const navList = document.querySelector('nav ul');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');

    navBtn.onclick = () => {
        navList.classList.toggle('visible');
        nav.classList.toggle('visible');
        main.classList.toggle('menu-open');
    }

    $('.slider__slides').slick({
      prevArrow: '.slider__left-arrow',
      nextArrow: '.slider__right-arrow'
    });
  });
