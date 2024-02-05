
class PopUpReservations {
    constructor() {
        this.openButton = document.querySelectorAll('[data-open-reservations]')
        this.closeButton = document.querySelectorAll('[data-close-reservations]')
        this.init()
    }
    init() {
        this.openButton.forEach(button => button.addEventListener('click', () => this.openReservations()))
        this.closeButton.forEach(button => button.addEventListener('click', () => this.closeReservations()))
        this.changeStyles()
    }
    openReservations() {
        document.querySelector('.reservations--section').style.display = "flex"
        document.querySelector('.hero__content .top--content').style.opacity = 0
        document.querySelector('.close-icon').classList.remove('opened');
        document.querySelector('.mobile-menu-drawer').classList.remove('opened');
        document.body.style.overflowY = "hidden";
    }
    changeStyles() {
        let cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.type = "text/css";
        cssLink.innerHTML = `#modal-wrapper { background-color: 'transparent';}`
        frames['reservations-iframe'].document.head.appendChild(cssLink);
    }
    closeReservations() {
        document.querySelector('.reservations--section').style.display = "none"
        document.querySelector('.hero__content .top--content').style.opacity = 1;
        document.body.style.overflowY = "scroll";
    }
}

export default PopUpReservations