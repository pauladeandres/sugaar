
class PopUpMenu {
    constructor() {
        this.openButton = document.querySelectorAll('[data-open-popup]')
        this.closeButton = document.querySelectorAll('[data-close-popup]')
        this.init()
    }
    init() {
        this.openButton.forEach(button => button.addEventListener('click', () => this.openMenu()))
        this.closeButton.forEach(button => button.addEventListener('click', () => this.closeMenu()))
    }
    openMenu() {
        document.querySelector('.menu--popup').style.width = '100vw';
        document.querySelector('.menu--popup').style.opacity = 1;
        document.querySelector('.close-icon').classList.remove('opened');
        document.querySelector('.mobile-menu-drawer').classList.remove('opened');
        document.body.style.overflowY = "hidden";
    }
    closeMenu() {
        document.querySelector('.menu--popup').style.width = "0";
        document.querySelector('.menu--popup').style.opacity = 0;
        document.body.style.overflowY = "scroll";
    }
}

export default PopUpMenu