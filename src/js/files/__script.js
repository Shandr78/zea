// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// // Заміна блоків головної сторінки з інформацією проекту на слайдер
// let toggleBtns = document.querySelectorAll(".project__toggle-btn");
// if (toggleBtns) {
//   toggleBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (event) {
//       event.stopPropagation(); // Остановить всплытие события

//       let parent = this.parentNode;
//       let childBlocks = parent.querySelectorAll(".toggle-child");
//       let sliderBlock = parent.querySelector(".project__slider");
//       let buttonPrev = parent.querySelector(".swiper-button-prev");
//       let buttonNext = parent.querySelector(".swiper-button-next");

//       for (let i = 0; i < childBlocks.length; i++) {
//         //   childBlocks[i].style.display = 'none';
//         childBlocks[i].classList.toggle("visually-hidden");
//       }
//       btn.classList.toggle("visually-hidden");
//       sliderBlock.classList.toggle("visually-hidden");
//       buttonPrev.classList.toggle("visually-hidden");
//       buttonNext.classList.toggle("visually-hidden");
//       let nextSibling = parent.nextElementSibling;
//       while (nextSibling) {
//         if (
//           nextSibling.tagName === "DIV" &&
//           !nextSibling.classList.contains("toggle-child")
//         ) {
//           nextSibling.style.display = "block";
//           break;
//         }
//         nextSibling = nextSibling.nextElementSibling;
//       }
//     });
//   });
// }

// // Додаємо/прибираємо класс visually-hidden для слайдерів на головній при ширині екрану 1140рх
// const sliders = document.querySelectorAll(".project__slider");
// // const slidersProject = document.querySelectorAll('.projects__slider');
// const buttonPrev = document.querySelectorAll(".swiper-button-prev");
// const buttonNext = document.querySelectorAll(".swiper-button-next");

// if (sliders) {
//   function toggleSliderVisibility() {
//     sliders.forEach((slider) => {
//       if (window.innerWidth <= 1140) {
//         slider.classList.remove("visually-hidden");
//       } else {
//         slider.classList.add("visually-hidden");
//       }
//     });
//   }

//   window.addEventListener("load", toggleSliderVisibility);
//   window.addEventListener("resize", toggleSliderVisibility);

//   function toggleButtonVisibility() {
//     buttonPrev.forEach((btn) => {
//       if (window.innerWidth <= 1140) {
//         btn.classList.remove("visually-hidden");
//       } else {
//         btn.classList.add("visually-hidden");
//       }
//     });
//     buttonNext.forEach((btn) => {
//       if (window.innerWidth <= 1140) {
//         btn.classList.remove("visually-hidden");
//       } else {
//         btn.classList.add("visually-hidden");
//       }
//     });
//   }
//   window.addEventListener("load", toggleButtonVisibility);
//   window.addEventListener("resize", toggleButtonVisibility);
// }
