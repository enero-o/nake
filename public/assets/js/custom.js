/* ============================================================
 * Plugin Core Init
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */

'use strict';

$(document).ready(function () {
	/*
		Write your custom JS here
	*/
  //Intialize Slider
  //Intialize Slider
  const slider = new Swiper('#demo-hero-3 .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    parallax: true,
    speed: 1000,
    loop: false
  });
});
