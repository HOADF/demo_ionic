window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Бургер меню (основа)
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});
