
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
const mainProductSliders = document.querySelectorAll(".product-image-wrapper");

mainProductSliders.forEach((item) => {
  const Swipes = new Swiper(item, {
    loop: true,
    allowTouchMove: true,
    slidesPerView: 1,
    initialSlide: 0,
    effect: "fade",
    autoplay: {
      delay: 7000, // Use an object to specify the delay
    },
    speed: 300,
    noSwiping: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Add event listeners after Swiper initialization
  const swp = Swipes; // Use the Swiper instance
  item.addEventListener("mouseover", function () {
    swp.autoplay.start();
  });
  item.addEventListener("mouseout", function () {
    swp.autoplay.stop();
  });
});





              