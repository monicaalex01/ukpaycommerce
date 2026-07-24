/* =====================================================
   Simple WOW Animation
   Scroll Reveal Effect
===================================================== */

(function () {
  function WOW() {
    this.items = document.querySelectorAll(".wow");

    this.init();
  }

  WOW.prototype.init = function () {
    let self = this;

    if (this.items.length === 0) {
      return;
    }

    window.addEventListener("scroll", function () {
      self.check();
    });

    this.check();
  };

  WOW.prototype.check = function () {
    let height = window.innerHeight;

    this.items.forEach(function (item) {
      let top = item.getBoundingClientRect().top;

      if (top < height - 80) {
        item.classList.add("wow-show");
      }
    });
  };

  document.addEventListener("DOMContentLoaded", function () {
    new WOW();
  });
})();
