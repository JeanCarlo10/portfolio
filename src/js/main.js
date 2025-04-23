/* ===== CONTACT BUTTON ROTATE ===== */
const textButton = document.querySelectorAll('.contact_rotate__btn')

textButton.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

/* ===== SHOW MENU ===== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    overlay = document.getElementById('overlay')

/* ===== Menu show ===== */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    });
}

/* ===== Menu hidden ===== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}

/* ===== REMOVE MENU MOBILE ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');

    navMenu.classList.remove('show-menu');
    document.body.classList.remove('no-scroll');
    overlay.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ===== CHANGE BACKGROUND HEADER ===== */
const bgHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/* ===== SHOW SCROLL TOP ===== */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

/* ===== HOVER CARDS ===== */
let cards = document.querySelectorAll('.box__animation')
cards.forEach(card => {
    card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
})

/* ===== PHONE MASK ===== */
document.addEventListener('DOMContentLoaded', function () {
    const phone = document.getElementById('phone');

    phone.addEventListener('input', function (e) {
        let valor = e.target.value.replace(/\D/g, '');

        if (valor.length > 11) {
            valor = valor.substring(0, 11);
        }

        if (valor.length > 10) {
            valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (valor.length > 6) {
            valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (valor.length > 2) {
            valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            valor = valor.replace(/^(\d*)/, '($1');
        }

        e.target.value = valor;
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true
})

sr.reveal(`.home__title`, { delay: 600, distance: '100px', origin: 'top' })
sr.reveal(`.home__subtitle, .home__social-link`, { delay: 700, distance: '100px', origin: 'bottom' })
sr.reveal(`.contact_rotate__btn`, { delay: 300, origin: 'right' })
sr.reveal(`.about__container, .portfolio__content`, { interval: 200 })
sr.reveal(`.skill__box, .footer__container`, { interval: 100 })
sr.reveal(`.contact__info`, { origin: 'right' })
sr.reveal(`.contact__form`, { origin: 'left' })