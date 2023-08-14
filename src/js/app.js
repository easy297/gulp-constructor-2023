import BaseHelpers from './helpers/baseHelpers.js';
import popUpManager from './modules/popUpManager.js';
import burgerMenu from './modules/burgerMenu.js';
import tabs from './modules/tabs.js';
import accordion from './modules/accordion.js';
import Swiper from 'swiper';
import AOS from 'aos';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new popUpManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new burgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new tabs('tabs-example', {
  onChange: (data) => {
    console.log(data);
  },
});

new accordion('.accordion', {
  shouldOpenAll: false, // true
  defaultOpen: [], // [0,1]
  collapsedClass: 'open',
});


// import {
// 	Navigation,
// 	EffectFade,
// 	Pagination,
// 	Thumbs,
// 	Controller,
// 	FreeMode,
// 	Scrollbar,
// 	A11y,
// 	Mousewheel,
// } from 'swiper';

// const swiper = () => {
// 	new Swiper('.auctions-slider', {
// 		navigation: {
// 			nextEl: '.swiper-button-next1',
// 			prevEl: '.swiper-button-prev1' // Включить стрелочки
// 		},
// 		modules: [Navigation, FreeMode], // Модули которые будут использоваться
// 		autoHeight: true, // Автовысота
// 		speed: 500, // Скорость прокрутки слайдера
// 		slidesPerView: 3, // Количество слайдов которые будут видны,
// 		spaceBetween: 15,
// 		freeMode: true,
// 		grabCursor: true,
// 		breakpoints: {
// 			1300: {
// 				spaceBetween: 42
// 			},
// 			1100: {
// 				slidesPerView: 3
// 			},
// 			600: {
// 				slidesPerView: 2
// 			}
// 		}
// 	});
// }

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});