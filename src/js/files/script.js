// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

console.log('Test');
let toggleBtns = document.querySelectorAll('.project__toggle-btn');
toggleBtns.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    event.stopPropagation(); // Остановить всплытие события
   
    let parent = this.parentNode;
    let childBlocks = parent.querySelectorAll('.child');
    let sliderBlock = parent.querySelector('.project__slider')

    for (let i = 0; i < childBlocks.length; i++) {
    //   childBlocks[i].style.display = 'none';
    childBlocks[i].classList.toggle('visually-hidden');
    }
    btn.classList.toggle('visually-hidden');
    sliderBlock.classList.toggle('visually-hidden');

    let nextSibling = parent.nextElementSibling;
    while (nextSibling) {
      if (nextSibling.tagName === 'DIV' && !nextSibling.classList.contains('child')) {
        nextSibling.style.display = 'block';
        break;
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  });
});

// document.addEventListener('click', function(event) {
//   let target = event.target;
//   console.log(target);
//   let toggleBtn = target.closest('.project__toggle-btn');
//   let childBlock = target.closest('.child');
//   if (!toggleBtn && !childBlock) {
//     let childBlocks = document.querySelectorAll('.child');
//     for (let i = 0; i < childBlocks.length; i++) {
//       childBlocks[i].style.display = 'none';
//     }
//   }
// });
