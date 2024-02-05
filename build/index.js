/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/HeroSlider.js":
/*!***********************************!*\
  !*** ./src/modules/HeroSlider.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class HeroSlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll('.hero-slider__slide');
    this.init();
  }
  init() {
    document.querySelector('.hero-slider-arrow.next').addEventListener('click', () => this.nextSlide());
    document.querySelector('.hero-slider-arrow.prev').addEventListener('click', () => this.prevSlide());
    let that = this;
    setInterval(function () {
      if (that.currentSlide === that.slides.length - 1) {
        that.slides[that.currentSlide].classList.add('fade');
        that.currentSlide = 0;
        that.slides[that.currentSlide].classList.remove('fade');
      } else {
        that.slides[that.currentSlide].classList.add('fade');
        that.currentSlide += 1;
        that.slides[that.currentSlide].classList.remove('fade');
      }
    }, 4000);
  }
  nextSlide() {
    if (this.currentSlide === this.slides.length - 1) {
      this.slides[this.currentSlide].classList.add('fade');
      this.currentSlide = 0;
      this.slides[this.currentSlide].classList.remove('fade');
    } else {
      this.slides[this.currentSlide].classList.add('fade');
      this.currentSlide += 1;
      this.slides[this.currentSlide].classList.remove('fade');
    }
  }
  prevSlide() {
    if (this.currentSlide === 0) {
      this.slides[0].classList.add('fade');
      this.currentSlide = this.slides.length - 1;
      this.slides[this.slides.length - 1].classList.remove('fade');
    } else {
      this.slides[this.currentSlide].classList.add('fade');
      this.currentSlide -= 1;
      this.slides[this.currentSlide].classList.remove('fade');
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (HeroSlider);

/***/ }),

/***/ "./src/modules/MenuSlider.js":
/*!***********************************!*\
  !*** ./src/modules/MenuSlider.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class MenuSlider {
  constructor() {
    this.nextButton = document.querySelector('.next--button');
    this.prevButton = document.querySelector('.prev--button');
    this.slider = document.querySelector('.menu-slider');
    this.slides = document.querySelectorAll('.menu_slider_slide');
    this.slidesContainer = document.querySelector('.menu--slider-scroll');
    this.currentSlide = 0;
    this.totalSlides = document.querySelectorAll('.menu_slider_slide').length;
    this.totalSlidesNumber = document.querySelectorAll('.menu_slider_slide').length;
    this.pageNumber = document.querySelector('[data-total-number]');
    this.currentNumber = 1;
    this.currentNumberContainer = document.querySelector('[data-current-number]');
    this.init();
  }
  init() {
    if (screen.width > 768) {
      this.totalSlidesNumber = (this.totalSlidesNumber - 1) / 2 + 1;
    } else {
      this.slides.forEach(slide => {
        slide.classList.add('cover--slide');
      });
    }
    this.nextButton.addEventListener('click', () => this.nextSlide());
    this.prevButton.addEventListener('click', () => this.prevSlide());
    this.pageNumber.innerHTML = this.totalSlidesNumber;
    document.addEventListener('keydown', e => this.checkKey(e));
    this.slidesContainer.addEventListener("touchmove", event => this.dragNumber());
  }
  checkKey(e) {
    if (e.keyCode == '37') {
      this.prevSlide();
    } else if (e.keyCode == '39') {
      this.nextSlide();
    }
  }
  nextSlide() {
    if (screen.width > 768) {
      if (this.currentNumber < this.totalSlidesNumber) {
        let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width;
        let slider = this.slider;
        slider.scrollLeft += slidesWidth;
        this.currentSlide = this.currentSlide + 2;
        this.currentNumber = this.currentNumber + 1;
        this.currentNumberContainer.innerHTML = this.currentNumber;
      } else {
        let slider = this.slider;
        slider.scrollLeft = 0;
        this.currentSlide = 0;
        this.currentNumber = 1;
        this.currentNumberContainer.innerHTML = this.currentNumber;
      }
    } else {
      if (this.currentNumber < this.totalSlidesNumber) {
        let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width;
        let slider = this.slider;
        slider.scrollLeft += slidesWidth;
        this.currentSlide = this.currentSlide + 1;
        this.currentNumber = this.currentNumber + 1;
        this.currentNumberContainer.innerHTML = this.currentNumber;
      } else {
        let slider = this.slider;
        slider.scrollLeft = 0;
        this.currentSlide = 0;
        this.currentNumber = 1;
        this.currentNumberContainer.innerHTML = this.currentNumber;
      }
    }
  }
  prevSlide() {
    if (screen.width > 768) {
      if (this.currentNumber > 1) {
        let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width;
        let slider = this.slider;
        slider.scrollLeft -= slidesWidth;
        this.currentSlide = this.currentSlide - 2;
        this.currentNumber = this.currentNumber - 1;
        this.currentNumberContainer.innerHTML = this.currentNumber;
      }
    } else {
      if (this.currentNumber > 1) {
        let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width;
        let slider = this.slider;
        slider.scrollLeft -= slidesWidth;
        this.currentSlide = this.currentSlide - 1;
        this.currentNumber = this.currentNumber - 1;
        this.currentNumberContainer.innerHTML = this.currentNumber;
      }
    }
  }
  dragNumber() {
    let slidesWidth = document.querySelector('.menu_slider_slide').getBoundingClientRect().width;
    let numberSlide = Number((this.slider.scrollLeft / slidesWidth).toFixed(0)) + 1;
    this.currentNumberContainer.innerHTML = numberSlide;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MenuSlider);

/***/ }),

/***/ "./src/modules/PopUpMenu.js":
/*!**********************************!*\
  !*** ./src/modules/PopUpMenu.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class PopUpMenu {
  constructor() {
    this.openButton = document.querySelectorAll('[data-open-popup]');
    this.closeButton = document.querySelectorAll('[data-close-popup]');
    this.init();
  }
  init() {
    this.openButton.forEach(button => button.addEventListener('click', () => this.openMenu()));
    this.closeButton.forEach(button => button.addEventListener('click', () => this.closeMenu()));
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
/* harmony default export */ __webpack_exports__["default"] = (PopUpMenu);

/***/ }),

/***/ "./src/modules/PopUpReservations.js":
/*!******************************************!*\
  !*** ./src/modules/PopUpReservations.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class PopUpReservations {
  constructor() {
    this.openButton = document.querySelectorAll('[data-open-reservations]');
    this.closeButton = document.querySelectorAll('[data-close-reservations]');
    this.init();
  }
  init() {
    this.openButton.forEach(button => button.addEventListener('click', () => this.openReservations()));
    this.closeButton.forEach(button => button.addEventListener('click', () => this.closeReservations()));
    this.changeStyles();
  }
  openReservations() {
    document.querySelector('.reservations--section').style.display = "flex";
    document.querySelector('.hero__content .top--content').style.opacity = 0;
    document.querySelector('.close-icon').classList.remove('opened');
    document.querySelector('.mobile-menu-drawer').classList.remove('opened');
    document.body.style.overflowY = "hidden";
  }
  changeStyles() {
    let cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.innerHTML = `#modal-wrapper { background-color: 'transparent';}`;
    frames['reservations-iframe'].document.head.appendChild(cssLink);
  }
  closeReservations() {
    document.querySelector('.reservations--section').style.display = "none";
    document.querySelector('.hero__content .top--content').style.opacity = 1;
    document.body.style.overflowY = "scroll";
  }
}
/* harmony default export */ __webpack_exports__["default"] = (PopUpReservations);

/***/ }),

/***/ "./src/modules/ScrollBehaviours.js":
/*!*****************************************!*\
  !*** ./src/modules/ScrollBehaviours.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class ScrollBehaviour {
  constructor() {
    this.init();
  }
  init() {
    let scroll = $(window).scrollTop();
    let startScroll = window.pageYOffset || document.documentElement.scrollTop;
    let manifestoScroll = $('.homepage--manifesto-section').offset().top - scroll;
    if (scroll > $(window).height() - 100) {
      $('.header--logo--container').css('top', 30 + 'px');
    }
    document.addEventListener('scroll', function () {
      scroll = $(window).scrollTop();
      let topAmount = $(window).height() - 70 - scroll;
      if (topAmount >= 30) {
        $('.header--logo--container').css('top', topAmount + 'px');
        let blur = scroll / 20;
        document.querySelector('.hero--slider-overlay').style.backdropFilter = `blur(${blur}px)`;
        document.querySelector('.hero--slider-overlay').style.webkitBackdropFilter = `blur(${blur}px)`;
      } else {
        $('.header--logo--container').css('top', 30 + 'px');
      }
      manifestoScroll = $('.homepage--manifesto-section').offset().top - scroll;
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (manifestoScroll <= -50) {
        $('.header--container.desktop')[0].classList.add('black');
        $('.header--logo--container').css('transition', 'top 0.3s ease');
        if (st > startScroll) {
          $('.header--container.desktop')[0].classList.add('up');
          $('.header--logo--container').css('top', -100 + 'px');
        } else {
          $('.header--container.desktop')[0].classList.remove('up');
          $('.header--logo--container').css('top', 30 + 'px');
        }
      } else {
        $('.header--container.desktop')[0].classList.remove('black');
        $('.header--logo--container').css('transition', '');
      }
      startScroll = st <= 0 ? 0 : st;
      let address = document.querySelector('.bottom--content');
      if (startScroll < screen.height * 0.8) {
        address.style.opacity = (screen.height - screen.height * 0.2 - startScroll) / (screen.height - screen.height * 0.2);
      } else {
        address.style.opacity = 0;
      }
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ScrollBehaviour);

/***/ }),

/***/ "./src/modules/ThemeFunctions.js":
/*!***************************************!*\
  !*** ./src/modules/ThemeFunctions.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class ThemeFunctions {
  constructor() {
    this.init();
  }
  init() {
    document.querySelector('.close-icon-container').addEventListener('click', () => this.openHeaderMenu());
  }
  openHeaderMenu() {
    document.querySelector('.mobile-menu-drawer').classList.toggle('opened');
    document.querySelector('.close-icon').classList.toggle('opened');
    if (document.querySelector('.mobile-menu-drawer').classList.contains('opened')) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ThemeFunctions);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/HeroSlider */ "./src/modules/HeroSlider.js");
/* harmony import */ var _modules_PopUpMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/PopUpMenu */ "./src/modules/PopUpMenu.js");
/* harmony import */ var _modules_ScrollBehaviours__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ScrollBehaviours */ "./src/modules/ScrollBehaviours.js");
/* harmony import */ var _modules_PopUpReservations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/PopUpReservations */ "./src/modules/PopUpReservations.js");
/* harmony import */ var _modules_MenuSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MenuSlider */ "./src/modules/MenuSlider.js");
/* harmony import */ var _modules_ThemeFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ThemeFunctions */ "./src/modules/ThemeFunctions.js");






let heroSlider = new _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_0__["default"]();
let popUpMenu = new _modules_PopUpMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
let scrollBehaviour = new _modules_ScrollBehaviours__WEBPACK_IMPORTED_MODULE_2__["default"]();
let popupReservations = new _modules_PopUpReservations__WEBPACK_IMPORTED_MODULE_3__["default"]();
let menuSlider = new _modules_MenuSlider__WEBPACK_IMPORTED_MODULE_4__["default"]();
let themeFunctions = new _modules_ThemeFunctions__WEBPACK_IMPORTED_MODULE_5__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map