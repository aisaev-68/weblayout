'use strict';

const swiper = new Swiper(".hero__swiper", {
  slideClass: 'hero__swiper-slide',
  wrapperClass: 'hero__swiper-wrapper',
  // spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero__swiper-bullets",
    bulletClass: 'hero__swiper-bullet',
    bulletActiveClass: 'hero__swiper-bullet_active',
    horizontalClass: 'hero__swiper-horizontal',
    clickable: true,
    renderBullet: function (index, className) {
      return `<a class="${className}" title="Перейти на ${++index}-й слайд"></a>`;
    }
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoHeight: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


$(document).ready(function(){

  $(".header__search-active").click(function(){
    $(".header__search").toggleClass("active");
    $(".header__input[type='text']").focus();
  });

  $(".header__closed-link").click(function(){
    $(".header__search").toggleClass("active");
    $(".header__search-active").focus();
  });

});


// функция для аккордеона.

$(".faq__accordion").accordion({
    heightStyle: "content",
    header: '> .faq__accordion-item > .faq__accordion-header',
    collapsible: true,
    active: false,
  });

  $(".ui-accordion-header-active").on('click', function() {
    $(".faq__accordion").accordion({
        collapsible: true,
        active: false,
    });
});



$(document).ready(function() {
	$('.header__burger').click(function(){
        $('.header__burger').toggleClass('active');
        $('.header__nav-list').toggleClass('active');
        $('body').toggleClass('fixed-page');
	});
});
