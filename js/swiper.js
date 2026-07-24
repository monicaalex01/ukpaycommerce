/* =====================================================
   Simple Swiper Slider
   Banner Carousel
===================================================== */

(function () {
  function Slider(container) {
    this.container = document.querySelector(container);

    if (!this.container) {
      return;
    }

    this.wrapper = this.container.querySelector(".swiper-wrapper");

    this.slides = this.container.querySelectorAll(".swiper-slide");

    this.pagination = this.container.querySelector(".swiper-pagination");

    this.index = 0;

    this.timer = null;

    this.init();
  }

  Slider.prototype.init = function () {
    let self = this;

    /* 创建分页 */

    if (this.pagination) {
      for (let i = 0; i < this.slides.length; i++) {
        let bullet = document.createElement("span");

        bullet.className = "swiper-pagination-bullet";

        if (i === 0) {
          bullet.classList.add("swiper-pagination-bullet-active");
        }

        bullet.dataset.index = i;

        bullet.onclick = function () {
          self.goTo(parseInt(this.dataset.index));
        };

        this.pagination.appendChild(bullet);
      }
    }

    this.update();

    this.autoPlay();
  };

  Slider.prototype.update = function () {
    this.wrapper.style.transform = "translateX(-" + this.index * 100 + "%)";

    this.wrapper.style.transition = "transform .6s ease";

    let bullets = this.container.querySelectorAll(".swiper-pagination-bullet");

    bullets.forEach(function (item, index) {
      item.classList.remove("swiper-pagination-bullet-active");

      if (index === this.index) {
        item.classList.add("swiper-pagination-bullet-active");
      }
    }, this);
  };

  Slider.prototype.goTo = function (index) {
    if (index >= this.slides.length) {
      index = 0;
    }

    if (index < 0) {
      index = this.slides.length - 1;
    }

    this.index = index;

    this.update();
  };

  Slider.prototype.next = function () {
    this.index++;

    if (this.index >= this.slides.length) {
      this.index = 0;
    }

    this.update();
  };

  Slider.prototype.autoPlay = function () {
    let self = this;

    this.timer = setInterval(function () {
      self.next();
    }, 5000);
  };

  Slider.prototype.pause = function () {
    clearInterval(this.timer);
  };

  /* 初始化首页Banner */

  document.addEventListener("DOMContentLoaded", function () {
    new Slider(".swiper-container");
  });
})();
