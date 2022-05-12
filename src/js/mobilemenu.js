import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? disableBodyScroll(document.body)
      : enableBodyScroll(document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();


jQuery(document).ready(function ($) {
  $('.customers-list').slick({
    arrows: false,
    dots: true,
    appendDots: $('.customers-slider__thumb'),
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

  $(document).on('click', '.burger-menu-btn', function () {
    $('.overlay-block').addClass('open');
    $('body').css('overflow', 'hidden');
  });
  $('.modal-toggle__close').on('click', function (evt) {
    $('.overlay-block').removeClass('open');
  });

  $('.overlay-block').on('click', function () {
    $(this).removeClass('open');
    $('.js-menu-container').removeClass('is-open');
    $('.js-open-menu').attr('aria-expanded', false);
    $('body').css('overflow', 'visible');
  });
});

