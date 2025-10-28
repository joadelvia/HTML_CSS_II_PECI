/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.css';



/**
 * Write any other JavaScript below
 */

// +(function () {
//   const university = "UOC";
//   console.log(`Hello, ${university}!`);
// })();

// AOS.init({
//   duration: 800,
//   once: true
// })

const swiper = new Swiper('.swiper', {
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination' },
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation, Pagination, Autoplay]
});