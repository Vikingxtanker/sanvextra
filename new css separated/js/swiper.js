// ===============================
// Product Swiper (3 Slides View)
// ===============================
var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination.product-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.product-next",
    prevEl: ".swiper-button-prev.product-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 25 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
});

// ===============================
// Review Swiper (Testimonials)
// ===============================
var reviewSwiper = new Swiper(".reviewSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination.review-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.review-next",
    prevEl: ".swiper-button-prev.review-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// ===============================
// Smooth Scroll for Navbar Links
// ===============================
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
