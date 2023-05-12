/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.slider-one')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-one', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			centeredSlides: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			
			// Ефекти
			effect: 'fade',
			/*
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.button-prev--one',
				nextEl: '.button-next--one',
				
			},
			
			// Брейкпоінти
			/*
			breakpoints: {
				992: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
			
				
				// 1928: {
				// 	slidesPerView: 'auto',
				// 	spaceBetween: 30,
				// },
			},
			
			*/
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.slider-three')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-three', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			centeredSlides: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			
			// Ефекти
			effect: 'fade',
			/*
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.button-prev--three',
				nextEl: '.button-next--three',
				
			},
			
			// Брейкпоінти
			/*
			breakpoints: {
				992: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
			
				
				// 1928: {
				// 	slidesPerView: 'auto',
				// 	spaceBetween: 30,
				// },
			},
			
			*/
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.slider-two')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-two', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			centeredSlides: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			
			// Ефекти
			effect: 'fade',
			/*
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.button-prev--two',
				nextEl: '.button-next--two',
				
			},
			
			// Брейкпоінти
			/*
			breakpoints: {
				992: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
			
				
				// 1928: {
				// 	slidesPerView: 'auto',
				// 	spaceBetween: 30,
				// },
			},
			
			*/
			// Події
			on: {

			}
		});
	}
}








// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});