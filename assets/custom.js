

  $(document).ready(function() {
    // Function to update the main image based on selected color variant
    function updateMainImage(selectedColor) {
      $(".product-image-slide").hide();
      $(".product-image-slide").each(function() {
        if ($(this).find("img").attr("alt") === selectedColor) {
          $(this).show();
        }
      });
    }

    // Function to handle size and color selection changes
    function handleSelectionChange() {
      // Get the selected size and color values
      var selectedSize = $("input[name='Size']:checked").val();
      var selectedColor = $("input[name='Color']:checked").val();

      // Update the main image based on the selected color variant
      updateMainImage(selectedColor);

      // If both size and color are selected, enable "Add to cart" button
      if (selectedSize && selectedColor) {
        $("input[type='submit']").prop("disabled", false);
      } else {
        $("input[type='submit']").prop("disabled", true);
      }
    }

    // Trigger the handleSelectionChange function when size or color input is changed
    $("input[name='Size'], input[name='Color']").on("change", function() {
      handleSelectionChange();
    });

    // Trigger the handleSelectionChange function on page load
    handleSelectionChange();
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




              