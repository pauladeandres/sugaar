class MenuSlider {
    constructor() {
        this.nextButton = document.querySelector('.next--button')
        this.prevButton = document.querySelector('.prev--button')
        this.slider = document.querySelector('.menu-slider')
        this.slides = document.querySelectorAll('.menu_slider_slide')
        this.slidesContainer = document.querySelector('.menu--slider-scroll')
        this.currentSlide = 0
        this.totalSlides = document.querySelectorAll('.menu_slider_slide').length
        this.totalSlidesNumber = document.querySelectorAll('.menu_slider_slide').length
        this.pageNumber = document.querySelector('[data-total-number]')
        this.currentNumber = 1
        this.currentNumberContainer = document.querySelector('[data-current-number]')
        this.init()
    }
    init() {
        if (screen.width > 768) {
            this.totalSlidesNumber = ((this.totalSlidesNumber - 1) / 2) + 1
        } else {
            this.slides.forEach(slide => {
                slide.classList.add('cover--slide')
            })
        }
        this.nextButton.addEventListener('click', () => this.nextSlide())
        this.prevButton.addEventListener('click', () => this.prevSlide())
        this.pageNumber.innerHTML = this.totalSlidesNumber

        document.addEventListener('keydown', (e) => this.checkKey(e))
        this.slidesContainer.addEventListener("touchmove", (event) => this.dragNumber());
    }
    checkKey(e) {
        if (e.keyCode == '37') {
            this.prevSlide()
        } else if (e.keyCode == '39') {
            this.nextSlide()
        }
    }
    nextSlide() {
        if (screen.width > 768) {
            if (this.currentNumber < this.totalSlidesNumber) {
                let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width

                let slider = this.slider

                slider.scrollLeft += slidesWidth;

                this.currentSlide = this.currentSlide + 2
                this.currentNumber = this.currentNumber + 1
                this.currentNumberContainer.innerHTML = this.currentNumber
            } else {
                let slider = this.slider
                slider.scrollLeft = 0;
                this.currentSlide = 0
                this.currentNumber = 1
                this.currentNumberContainer.innerHTML = this.currentNumber
            }
        } else {
            if (this.currentNumber < this.totalSlidesNumber) {
                let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width

                let slider = this.slider

                slider.scrollLeft += slidesWidth;

                this.currentSlide = this.currentSlide + 1
                this.currentNumber = this.currentNumber + 1
                this.currentNumberContainer.innerHTML = this.currentNumber
            } else {
                let slider = this.slider
                slider.scrollLeft = 0;
                this.currentSlide = 0
                this.currentNumber = 1
                this.currentNumberContainer.innerHTML = this.currentNumber
            }
        }

    }
    prevSlide() {
        if (screen.width > 768) {
            if (this.currentNumber > 1) {
                let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width
                let slider = this.slider

                slider.scrollLeft -= slidesWidth;

                this.currentSlide = this.currentSlide - 2

                this.currentNumber = this.currentNumber - 1
                this.currentNumberContainer.innerHTML = this.currentNumber
            }
        } else {
            if (this.currentNumber > 1) {
                let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width
                let slider = this.slider

                slider.scrollLeft -= slidesWidth;

                this.currentSlide = this.currentSlide - 1

                this.currentNumber = this.currentNumber - 1
                this.currentNumberContainer.innerHTML = this.currentNumber
            }
        }
    }
    dragNumber() {
        let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width
        let numberSlide = Number((this.slider.scrollLeft / slidesWidth).toFixed(0)) + 1;
        this.currentNumberContainer.innerHTML = numberSlide
    }
}

export default MenuSlider