window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
});
