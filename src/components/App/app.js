document.addEventListener('DOMContentLoaded', () => {

    if (window.innerWidth / window.innerHeight < 1.2) {
        document.body.classList.add('change');
        document.documentElement.classList.add('change');
        document.querySelector('.change-screen').classList.add('active');
        document.querySelector('.menu').style.display = 'none';
    } else {
        if (document.querySelector('.change-screen.active')) {
            document.querySelector('.change-screen').classList.remove('active');
            document.querySelector('.menu').style.display = '';
        }
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth / window.innerHeight < 1.2) {
        document.querySelector('.change-screen').classList.add('active');
        document.body.classList.add('change');
        document.documentElement.classList.add('change');
        document.querySelector('.menu').style.display = 'none';
    } else {
        if (document.querySelector('.change-screen.active')) {
            document.body.classList.remove('change');
            document.documentElement.classList.remove('change');
            document.querySelector('.change-screen').classList.remove('active');
            document.querySelector('.menu').style.display = '';
        }
    }
});