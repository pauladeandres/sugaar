class ThemeFunctions {
    constructor() {
        this.init()
    }
    init() {
        document.querySelector('.close-icon-container').addEventListener('click', () => this.openHeaderMenu())
    }
    openHeaderMenu() {
        document.querySelector('.mobile-menu-drawer').classList.toggle('opened')
        document.querySelector('.close-icon').classList.toggle('opened')

        if (document.querySelector('.mobile-menu-drawer').classList.contains('opened')) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }

    }
}


export default ThemeFunctions