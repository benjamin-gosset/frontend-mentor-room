const navBtn = document.querySelector('.nav__btn');
const navList = document.querySelector('nav ul');
const nav = document.querySelector('nav');

//navBtn.onclick = () => navList.classList.toggle('visible');
navBtn.onclick = () => {
    navList.classList.toggle('visible');
    nav.classList.toggle('visible');
}
