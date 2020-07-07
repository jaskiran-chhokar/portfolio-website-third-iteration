//Toggle Mobile Menu on click
function mobileToggle() {
    const navbar = document.querySelector('.navbar__line');
    const navbarMobile = document.querySelector('.navbar__mobile');

    navbar.addEventListener('click', e => {
        e.target.classList.toggle('display-menu');
        if (e.target.classList.contains('display-menu')) {
            navbarMobile.style.display = 'block';
        } else {
            navbarMobile.style.display = 'none';
        }
    });

    closeMobileMenu(navbarMobile);
}

//Close Mobile Menu after Successful User Navigation
function closeMobileMenu(navbarMobile) {
    const nabvarMobileItems = document.querySelector('.navbar__items--mobile');
    const navbarLine = document.querySelector('.navbar--line__two');

    nabvarMobileItems.addEventListener('click', e => {
        if (e.target.classList.contains('navbar__link--mobile')) {
            navbarMobile.style.display = 'none';
            navbarLine.classList.remove('display-menu')
        }
    });
}

mobileToggle();