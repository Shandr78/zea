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
	if (document.querySelector('.slider-1')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-1', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--1',
				nextEl: '.button-next--1',
				
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
	if (document.querySelector('.slider-2')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-2', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--2',
				nextEl: '.button-next--2',
				
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
	if (document.querySelector('.slider-3')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-3', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--3',
				nextEl: '.button-next--3',
				
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
	if (document.querySelector('.slider-4')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-4', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--4',
				nextEl: '.button-next--4',
				
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
	if (document.querySelector('.slider-5')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-5', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--5',
				nextEl: '.button-next--5',
				
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
	if (document.querySelector('.slider-6')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-6', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--6',
				nextEl: '.button-next--6',
				
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
	if (document.querySelector('.slider-7')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-7', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--7',
				nextEl: '.button-next--7',
				
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
	if (document.querySelector('.slider-8')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-8', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--8',
				nextEl: '.button-next--8',
				
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
	if (document.querySelector('.slider-9')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-9', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--9',
				nextEl: '.button-next--9',
				
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
	if (document.querySelector('.slider-10')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-10', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--10',
				nextEl: '.button-next--10',
				
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
	if (document.querySelector('.slider-11')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-11', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--11',
				nextEl: '.button-next--11',
				
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
	if (document.querySelector('.slider-12')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-12', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--12',
				nextEl: '.button-next--12',
				
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
	if (document.querySelector('.slider-13')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-13', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--13',
				nextEl: '.button-next--13',
				
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
	if (document.querySelector('.slider-14')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-14', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--14',
				nextEl: '.button-next--14',
				
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
	if (document.querySelector('.slider-15')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-15', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--15',
				nextEl: '.button-next--15',
				
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
	if (document.querySelector('.slider-16')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-16', { // Вказуємо склас потрібного слайдера
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
				prevEl: '.button-prev--16',
				nextEl: '.button-next--16',
				
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