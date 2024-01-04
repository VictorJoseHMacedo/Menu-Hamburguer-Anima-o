const iconMenu = document.querySelectorAll('.icon-menu');

iconMenu[0].addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if(menu.classList.contains('hide')) {
        menu.classList.add('show');
        menu.classList.remove('hide')
    } else {
        menu.classList.remove('show');
        menu.classList.add('hide')
    }
});