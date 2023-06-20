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
      slidesPerView: 4,
      
    },
    },
});
})

// shop lock slider
// const shopLockProduct= document.querySelectorAll(".shop-lock-products");
// shopLockProduct.forEach((slides)=>{
//   var shopSlides = new Swiper(slides,{
//       slidesPerView:1,
//   });
// });



              