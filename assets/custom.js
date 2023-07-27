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
    allowTouchMove:false,
  slidesPerView:1,
  initialSlide: 0,
  effect:"fade",
    autoplay:4000,
     speed: 300,
 navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
},
}); 

 item.addEventListener("mouseover", function () {
    Swipes.autoplay.start();
  });

  item.addEventListener("mouseout", function () {
    Swipes.autoplay.stop();
  });
});





              