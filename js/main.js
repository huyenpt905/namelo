document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const topBar = document.querySelector('ul.topbar');
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
});