/* =====================================================
 Vietnam Payment Website
 Main Javascript
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ==============================
 Mobile Menu
============================== */

  const menu = document.querySelector(".mobile-menu");

  const nav = document.querySelector(".nav");

  if (menu) {
    menu.addEventListener("click", function () {
      if (nav.style.display === "block") {
        nav.style.display = "none";
      } else {
        nav.style.display = "block";

        nav.style.position = "absolute";

        nav.style.top = "70px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.background = "#fff";

        nav.style.padding = "20px";
      }
    });
  }

  /* ==============================
 Header Scroll Effect
============================== */

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,.12)";
    } else {
      header.style.boxShadow = "0 3px 15px rgba(0,0,0,.06)";
    }
  });

  /* ==============================
 Image Lazy Loading
============================== */

  const images = document.querySelectorAll("img");

  images.forEach(function (img) {
    img.loading = "lazy";
  });

  /* ==============================
 Smooth Anchor
============================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  /* ==============================
 Contact Form Demo
============================== */

  const form = document.querySelector(".contact-form form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("感谢您的咨询，我们会尽快联系您。");
    });
  }
});
