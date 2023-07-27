



//  collection-tabbing slider
const featureProduct = document.querySelectorAll(".collection-carousel");
featureProduct.forEach((item)=>{
  var Swipes = new Swiper(item, {
  loop: true,
  slidesPerView:1,
  spaceBetween: 10,
  initialSlide: 0,


  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 5,
      
    },
    },
});
});

// product-main-slider-in tabbing section
const mainProductSlider = document.querySelectorAll(".product-image-wrapper");
mainProductSlider.forEach((item)=>{
  var Swipes = new Swiper(item, {
  loop: true,
    allowTouchMove:true,
  slidesPerView:1,
  initialSlide: 0,
  effect:"fade",
        autoplay:7000,
	   speed: 300,
        noSwiping: true,
  
 navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
},

   
    
});
  var swp = item.swiper;
  item.addEventListener("mouseenter", function() { // Changed "mouseover" to "mouseenter"
    swp.autoplay.start();
  });

  item.addEventListener("mouseleave", function() { // Changed "mouseout" to "mouseleave"
    swp.autoplay.stop();
  });

  });




              