//Nav Menu feature
const menuIcon = document.querySelector('#menuIcon');
const nav = document.querySelector('nav');
const jointIcon = document.querySelectorAll('.jointicon');
const hamburger = document.querySelector('#hamburger');

menuIcon.addEventListener("click", () => {
    nav.classList.toggle('open');
    jointicon.forEach(icon => {
        icon.classList.toggle('hidden');
    });
});

window.addEventListener("resize", () => {
    if(document.body.clientWidth > 720) {
        nav.classList.remove('open');
        jointicon.forEach(icon=> {
            icon.classList.add('hidden')
        });
        hamburger.classList.remove('hidden')
    }
});