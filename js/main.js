
const header = document.getElementById('header');
const topBar = document.querySelector('ul.topbar');
const mobileNav = document.querySelector('.mobile-nav');
const iconMobileNav = document.querySelector('.mobile-nav i');
const mainNav = document.querySelector('.main-nav');
const listNav = document.querySelector('.main-nav .main-nav__list');


/*preloader*/
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
});

/*ready func*/
document.addEventListener('DOMContentLoaded', () => {
    let status = '1';
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            if (status === '1') {
                header.classList.add('bg-while');
                topBar.classList.add('d-none');
                status = '0';
            }
        }
        else if (window.pageYOffset <= 100) {
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


//Comment form
const comment = document.forms['comment'];

comment.addEventListener('submit', postComment);

function postComment(e) {
    e.preventDefault();

    let data = {
        name: `${comment.name.value}`,
        email: `${comment.email.value}`,
        subject: `${comment.subject.value}`,
        message: `${comment.message.value}`
    };
    

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://5e8985b1b4252f0016a61eb3.mockapi.io/api/comments', true);
    xhr.setRequestHeader('Content-type', 'application/JSON');

    xhr.send(JSON.stringify(data));
    comment.reset();
}
