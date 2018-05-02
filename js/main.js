$(document).ready(function(){
  $(".slider").owlCarousel({
  	items: 1,
  	autoplay: true,
  	loop: true,
  	autoplayTimeout: 10000
  });

  $(".slider-snowboards").owlCarousel({
  	items: 3,
  	autoplay: true,
  	loop: true,
  	autoplayTimeout: 10000,
  	nav: true,
  	navText: ['','']
  });
  
});