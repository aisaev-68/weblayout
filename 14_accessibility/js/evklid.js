"use strict";

const swiper = new Swiper(".hero__swiper", {
  slideClass: "hero__swiper-slide",
  wrapperClass: "hero__swiper-wrapper",
  // spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero__swiper-bullets",
    bulletClass: "hero__swiper-bullet",
    bulletActiveClass: "hero__swiper-bullet_active",
    horizontalClass: "hero__swiper-horizontal",
    clickable: true,
    renderBullet: function (index, className) {
      return `<a class="${className}" title="Перейти на слайд ${++index}"></a>`;
    },
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // autoHeight: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

$(document).ready(function () {
  $(".header__search-active").click(function () {
    $(".header__search").toggleClass("active");
    $(".header__input[type='text']").focus();
  });

  $(".header__closed-link").click(function () {
    $(".header__search").toggleClass("active");
    $(".header__search-active").focus();
  });
});

// функция для аккордеона.

$(".faq__accordion").accordion({
  heightStyle: "content",
  header: "> .faq__accordion-item > .faq__accordion-header",
  collapsible: true,
  active: false,
});

$(".ui-accordion-header-active").on("click", function () {
  $(".faq__accordion").accordion({
    collapsible: true,
    active: false,
  });
});

$(".faq__accordion-item").focus(function (e) {
  $(document).on("keydown", (event) => {
    if (event.keyCode == 13 || event.keyCode === 32) {
      $(this).find(".faq__accordion-header").click();
    }
  });
});

$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger").toggleClass("active");
    $(".header__nav-list").toggleClass("active");
    $("body").toggleClass("fixed-page");
  });

  $(".header__nav-link").click(function (event) {
    $(".header__burger, .header__nav-list").removeClass("active");
    $("body").removeClass("lock");
  });

  $(".header__focus-link").focusout(function (event) {
    if ($(".header__burger").hasClass("active")) {
      $(".header-link").focus();
      $(".header__burger, .header__nav-list").removeClass("active");
      $("body").removeClass("lock");
    } else {
      $(".header__search-active").focus();
    }
  });

  $(".header__burger").focusout(function (event) {
    if (!$(".header__burger").hasClass("active")) {
      $(".header-link").focus();
    }
  });

  $(".header-link").focusout(function (event) {
    if ($(".header__nav-list").is(":hidden")) {
      $(".header__search-active").focus();
    }
  });


  $(".faq__accordion-item:last-child").focusout(function (event) {
    if ($(".footer__left__list").is(":hidden")) {
      $(".footer__form-name").focus();
    }

  });

  $(".footer__checkbox__text").focusout(function (event) {
    if($(".footer__left__list").is(":hidden")) {
      $(".footer__logo").focus();
    };
  });

  $(".footer__logo").focusout(function (event) {
    if($(".footer__left__list").is(":hidden")) {
      $(".footer__fb__link").focus();
    }
  });
});
