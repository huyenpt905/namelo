
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

/**
 * Comment Form
 */
const API = 'http://5e8985b1b4252f0016a61eb3.mockapi.io/api';
const comment = document.forms['comment'];

comment.addEventListener('submit', postComment);

function postComment(e) {
    e.preventDefault();

    let data = {
        name: `${this.name.value}`,
        email: `${this.email.value}`,
        subject: `${this.subject.value}`,
        message: `${this.message.value}`
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${API + '/comments'}`, true);
    xhr.setRequestHeader('Content-type', 'application/JSON');

    xhr.send(JSON.stringify(data));
    comment.reset();
}

//subscribe input
const subscribe = document.forms['subscribe'];
subscribe.addEventListener('submit', postSubscribe);

function postSubscribe(e) {
    e.preventDefault();
    const btnSubmit = comment.submit;

    let email = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/;
    if (!email.test(comment.email.value) || '') {
        comment.email.attributes.required = true;
    } else {
        console.log('else');
        let data = {
            email: `${this.email.value}`
        }

        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${API + '/subscribe'}`, true);
        xhr.setRequestHeader('Content-type', 'application/JSON');

        xhr.send(JSON.stringify(data));
        this.reset();
    }
}
