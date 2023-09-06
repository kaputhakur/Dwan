
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
      delay: 1000, // Specify autoplay delay here
      disableOnInteraction: false, // Allow autoplay to continue after manual interaction
    },
    speed: 300,
    noSwiping: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Add event listeners to start and stop autoplay on hover
  item.addEventListener('mouseenter', () => {
    swiper.autoplay.start();
  });

  item.addEventListener('mouseleave', () => {
    swiper.autoplay.stop();
  });
});




              