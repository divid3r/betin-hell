'use strict';

$(document).ready(function() {

   const roulettePrizes = document.querySelectorAll('.roulette__prize'),
      wheelPrize = document.querySelector('.wheel-prize');
   let randomPrize = null,
      randomPrizeIndex = 0,
      randomPrizeImg = null,
      randomPrizeText = null;

   // roulette
   $('.roulette__spin-btn').click(() => {
      if (!$('.roulette__wheel-prize-wrap').hasClass('show')) {
         $('.roulette__wheel-spin').removeClass('pulse');
         $('.roulette__spin-btn').addClass('active');

         window.setTimeout(() => {
            $('.roulette__wheel-spin').addClass('rotate');
         }, 200);

         window.setTimeout(() => {
            randomPrizeIndex = Math.floor(Math.random() * roulettePrizes.length);
            randomPrizeImg = roulettePrizes[randomPrizeIndex].children[1].cloneNode(true);
            randomPrizeText = roulettePrizes[randomPrizeIndex].children[2].cloneNode(true);
            wheelPrize.append(randomPrizeImg);

            $('.roulette__wheel-prize-wrap').addClass('show');
            $('.roulette__wheel-spin').removeClass('rotate');
            $('.roulette__spin-btn').removeClass('active');

            window.setTimeout(() => {
               $('.roulette__wheel-prize-wrap').removeClass('show');
               $('.roulette__wheel-spin').addClass('pulse');
               wheelPrize.innerHTML = '';
            }, 1200);
         }, 1400);
      }
   });
   // end . roulette


   const productsButtonAll = document.querySelector('.products__button-all'),
      productsList = document.querySelector('.products__list');

   productsButtonAll.addEventListener('click', () => {
      productsList.classList.toggle('all');
   });

});