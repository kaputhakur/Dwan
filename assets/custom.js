
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

mainProductSlider.forEach((item) => {
  const swiper = new Swiper(item, {
    loop: true,
    allowTouchMove: true,
    slidesPerView: 1,
    effect: "fade",
     autoplay: {
      delay: 1000, // Adjust the delay as needed (in milliseconds)
    },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  item.swiper = swiper; // Store the swiper instance inside the item

  item.addEventListener("mouseover", function () {
    swiper.autoplay.start(); // Use the swiper instance for autoplay control
  });

  item.addEventListener("mouseout", function () {
    swiper.autoplay.stop(); // Use the swiper instance for autoplay control
  });
});




              