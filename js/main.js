'use strict';

$(document).ready(function() {

   // menu top click
   const headerTopMenuButton = document.querySelector('.header-top .menu__button'),
      headerTopMenuButtonOpen = document.querySelector('.header-top .menu__button .open'),
      headerTopMenuButtonClose = document.querySelector('.header-top .menu__button .close');

   headerTopMenuButtonOpen.addEventListener('click', (e) => {
      let target = e.target;

      target = target.closest('.open');
      headerTopMenuButton.classList.add('active');

   });

   headerTopMenuButtonClose.addEventListener('click', (e) => {
      let target = e.target;

      target = target.closest('.close');
      headerTopMenuButton.classList.remove('active');

   });

   // logo animation
   const logo = document.querySelector('.header-top .logo');

   setInterval(() => {
      if (logo.classList.contains('spin')) {
         logo.classList.remove('spin');
      } else {
         logo.classList.add('spin');
      }
   }, 2500);

   // roulette
   const roulette = document.querySelector('.roulette'),
      rouletteSpinBtn = document.querySelector('.roulette__spin-btn'),
      roulettePrizes = document.querySelectorAll('.roulette__prize'),
      wheelPrize = document.querySelector('.wheel-prize'),
      wheelPrizeFly = document.querySelector('.wheel-prize-fly'),
      scrollCanvasPrizes = document.querySelector('.scroll-canvas__prizes'),
      getYourPrizesCount = document.querySelector('.scroll-canvas .get-your-prizes .count'),
      getYourPrizes = document.querySelector('.scroll-canvas .get-your-prizes');
   let randomPrize = null,
      randomPrizeIndex = 0,
      randomPrizeImgCanvas = null,
      randomPrizeImg = null,
      randomPrizeText = null,
      luckySpin = 6;

   rouletteSpinBtn.addEventListener('click', () => {
      if (luckySpin >= 1) {

         if (!roulette.classList.contains('active')) {
            roulette.classList.add('active');

            if (!$('.roulette__wheel-prize-wrap').hasClass('show')) {
               $('.roulette__wheel-spin').removeClass('pulse');
               $('.roulette__spin-btn').addClass('active');

               window.setTimeout(() => {
                  $('.roulette__wheel-spin').addClass('rotate');
               }, 200);

               window.setTimeout(() => {
                  randomPrizeIndex = Math.floor(Math.random() * roulettePrizes.length);
                  randomPrizeImgCanvas = roulettePrizes[randomPrizeIndex].children[0].cloneNode(true);
                  randomPrizeImg = roulettePrizes[randomPrizeIndex].children[1].cloneNode(true);
                  randomPrizeText = roulettePrizes[randomPrizeIndex].children[2].cloneNode(true);
                  wheelPrize.append(randomPrizeImg);

                  // prize fly to the canvas
                  const prizeFlyImg = randomPrizeImgCanvas.cloneNode(true);
                  const prizeFlyBody = document.createElement('div');

                  prizeFlyBody.classList.add('wheel-prize');
                  prizeFlyBody.append(prizeFlyImg);
                  wheelPrizeFly.append(prizeFlyBody);

                  window.setTimeout(() => {
                     prizeFlyBody.classList.add('move');

                     window.setTimeout(() => {
                        wheelPrizeFly.innerHTML = '';
                     }, 200);
                  }, 200);

                  $('.roulette__wheel-prize-wrap').addClass('show');
                  $('.roulette__wheel-spin').removeClass('rotate');
                  $('.roulette__spin-btn').removeClass('active');

                  // add a prize to the scroll
                  const scrollCanvasPrize = document.createElement('div');
                  scrollCanvasPrize.classList.add('scroll-canvas__prize');
                  scrollCanvasPrize.append(randomPrizeImgCanvas);
                  scrollCanvasPrize.append(randomPrizeText);

                  scrollCanvasPrize.classList.add('prize-added');
                  luckySpin--;
                  window.setTimeout(() => {
                     scrollCanvasPrizes.prepend(scrollCanvasPrize);
                  }, 250);

                  if (luckySpin >= 1) {
                     getYourPrizesCount.textContent = luckySpin;
                  } else {
                     getYourPrizes.classList.add('done');
                  }

                  window.setTimeout(() => {
                     $('.roulette__wheel-prize-wrap').removeClass('show');
                     $('.roulette__wheel-spin').addClass('pulse');
                     wheelPrize.innerHTML = '';
                     roulette.classList.remove('active');
                  }, 1200);
               }, 1400);
            }
         }

      }
   });
   // end . roulette


   const productsButtonAll = document.querySelector('.products__button-all'),
      productsList = document.querySelector('.products__list');

   productsButtonAll.addEventListener('click', () => {
      productsList.classList.toggle('all');
   });

});