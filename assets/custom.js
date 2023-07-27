  const mainProductImage = document.querySelector(".feature-image");
  const variantImages = document.querySelectorAll(".variant-images img");

  // Add a click event listener to each variant image
  variantImages.forEach((variantImage) => {
    variantImage.addEventListener("click", () => {
      // Get the URL of the clicked variant image
      const variantImageUrl = variantImage.getAttribute("src");

      // Update the main product image with the variant image URL
      mainProductImage.setAttribute("src", variantImageUrl);

      // Optionally, you can also update the link URL if needed
      const productLink = document.querySelector(".product-image-slide a");
      productLink.setAttribute("href", "{{ card_product.url }}");
    });
  });


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
  
 navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
},
    
});

  });




              