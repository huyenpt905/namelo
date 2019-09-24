
const header = document.getElementById('header');
const topBar = document.querySelector('ul.topbar');
const mobileNav = document.querySelector('.mobile-nav');
const iconMobileNav = document.querySelector('.mobile-nav i');
const mainNav =  document.querySelector('.main-nav');
const listNav = document.querySelector('.main-nav .main-nav__list');

const home = document.getElementById('home');
const about = document.getElementById('about');
const services = document.getElementById('services');
const portfolio = document.getElementById('portfolio');
const team = document.getElementById('team');
const whyUs = document.getElementById('why-us');
const contact = document.getElementById('contact');


/*preloader*/
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
});

/*ready func*/
document.addEventListener('DOMContentLoaded', () => {
    let status = '1';
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 100) {
            if (status === '1') {
                header.classList.add('bg-while');
                topBar.classList.add('d-none');
                status = '0';
            }
        }
        else if(window.pageYOffset <= 100) {
            if (status === '0') {
                header.classList.remove('bg-while');
                topBar.classList.remove('d-none');
                status = '1';
            }
        }
    });

    mobileNav.addEventListener('click', () => {
       showMobileNav();
    });



});

function showMobileNav() {
    iconMobileNav.classList.toggle('fa-bars');
    iconMobileNav.classList.toggle('fa-times');
    iconMobileNav.classList.toggle('c-white');
    mainNav.classList.toggle('bg-purple');
    listNav.classList.toggle('show-nav');
}

