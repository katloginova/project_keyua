'use strict';

$(document).on('ready', function () {
  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false,
      }
    }]
  });
});