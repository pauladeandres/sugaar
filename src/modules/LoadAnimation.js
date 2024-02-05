class LoadAnimation {
    constructor() {
        this.init()
    }
    init() {
        let logoShown = sessionStorage.getItem("logo_shown");
        if(!logoShown) {
            document.querySelector('.logoload').style.display = 'block'
            $(window).load(function () {
                $(".logoload").delay(1000).fadeOut("slow");
            })
            sessionStorage.setItem("logo_shown", true);
        } 
    }
}


export default LoadAnimation