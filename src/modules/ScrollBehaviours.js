class ScrollBehaviour {
  constructor() {
    this.init();
  }

  init() {
    let scroll = $(window).scrollTop();
    let startScroll = window.pageYOffset || document.documentElement.scrollTop;
    let manifestoScroll = $(".homepage--manifesto-section").offset().top - scroll;
    if (scroll > $(window).height() - 100) {
      $(".header--logo--container").css("top", 30 + "px");
      if (document.body.classList.contains("theme-dark")) {
        document.body.classList.remove("theme-dark");
      }
    }
    document.addEventListener("scroll", function () {
      scroll = $(window).scrollTop();
      let topAmount = $(window).height() - 70 - scroll;
      if (topAmount >= 30) {
        $(".header--logo--container").css("top", topAmount + "px");
        let blur = scroll / 20;
        document.querySelector(".hero--slider-overlay").style.backdropFilter = `blur(${blur}px)`;
        document.querySelector(".hero--slider-overlay").style.webkitBackdropFilter = `blur(${blur}px)`;
      } else {
        $(".header--logo--container").css("top", 30 + "px");
      }

      manifestoScroll = $(".homepage--manifesto-section").offset().top - scroll;
      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (manifestoScroll <= -50) {
        $(".header--container.desktop")[0].classList.add("black");
        $(".header--logo--container").css("transition", "top 0.3s ease");
        if (st > startScroll) {
          $(".header--container.desktop")[0].classList.add("up");
          $(".header--logo--container").css("top", -100 + "px");
        } else {
          $(".header--container.desktop")[0].classList.remove("up");
          $(".header--logo--container").css("top", 30 + "px");
        }
      } else {
        $(".header--container.desktop")[0].classList.remove("black");
        $(".header--logo--container").css("transition", "");
      }
      startScroll = st <= 0 ? 0 : st;
      let address = document.querySelector(".bottom--content");
      if (startScroll < screen.height * 0.8) {
        address.style.opacity = (screen.height - screen.height * 0.2 - startScroll) / (screen.height - screen.height * 0.2);
      } else {
        address.style.opacity = 0;
      }
    });
  }
}

export default ScrollBehaviour;
