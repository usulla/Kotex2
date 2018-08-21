document.addEventListener('DOMContentLoaded', () => {
    toggleMobileMenu();
});

function toggleMobileMenu() {
    const menuToggle = document.querySelector('.toggle-menu'),
        closeBtn = document.querySelector('.mobile-menu__close');

    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }
    document.querySelectorAll('.mobile-menu a').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.mobile-menu').classList.remove('mobile-menu--is-active');
        });
    });

    function openMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.add('mobile-menu--is-active');
    }

    function closeMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.remove('mobile-menu--is-active');
    }
}