class HeroSlider {
    constructor() {
        this.currentSlide = 0
        this.slides = document.querySelectorAll('.hero-slider__slide')

        this.init()
    }
    init() {

        document.querySelector('.hero-slider-arrow.next').addEventListener('click', () => this.nextSlide())
        document.querySelector('.hero-slider-arrow.prev').addEventListener('click', () => this.prevSlide())

        let that = this
        setInterval(function () {
            if (that.currentSlide === (that.slides.length - 1)) {
                that.slides[that.currentSlide].classList.add('fade')
                that.currentSlide = 0
                that.slides[that.currentSlide].classList.remove('fade')
            } else {
                that.slides[that.currentSlide].classList.add('fade')
                that.currentSlide += 1
                that.slides[that.currentSlide].classList.remove('fade')
            }
        }, 4000)
    }
    nextSlide() {
        if (this.currentSlide === (this.slides.length - 1)) {
            this.slides[this.currentSlide].classList.add('fade')
            this.currentSlide = 0
            this.slides[this.currentSlide].classList.remove('fade')
        } else {
            this.slides[this.currentSlide].classList.add('fade')
            this.currentSlide += 1
            this.slides[this.currentSlide].classList.remove('fade')
        }
    }
    prevSlide() {
        if (this.currentSlide === 0) {
            this.slides[0].classList.add('fade')
            this.currentSlide = this.slides.length - 1
            this.slides[this.slides.length - 1].classList.remove('fade')
        } else {
            this.slides[this.currentSlide].classList.add('fade')
            this.currentSlide -= 1
            this.slides[this.currentSlide].classList.remove('fade')
        }
    }
}

export default HeroSlider