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

    let isVisible = function(el) {
      return $(el).is(':visible');
    }

    let isMobile = isVisible('.slider .mobile');

    if ( isMobile) {
      $('.slider__slides.mobile').slick({
        prevArrow: '.slider__left-arrow',
        nextArrow: '.slider__right-arrow'
      });
    } else {
      $('.slider__slides.desktop').slick({
        prevArrow: '.slider__left-arrow',
        nextArrow: '.slider__right-arrow'
      });
    }

    
  });
