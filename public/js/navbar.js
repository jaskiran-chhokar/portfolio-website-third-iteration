const navbar = document.querySelector('.navbar__line');
const navbarMobile = document.querySelector('.navbar__mobile');


navbar.addEventListener('click', e => {
    e.target.classList.toggle('toggle-this');

    if (e.target.classList.contains('toggle-this')) {
        navbarMobile.style.display = 'block';
    } else {
        navbarMobile.style.display = 'none';
    }
}); 