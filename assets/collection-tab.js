  // tabbing
  var tabLinks = document.querySelector(".Tab-{{ section.id}}");
  var tabContent = document.querySelectorAll(".TabContent-{{ section.id}}");
  tabLinks.forEach(function(el) {
     el.addEventListener("click", openTabs);
  });
  function openTabs(el) {
     var btnTarget = el.currentTarget;
     var id = btnTarget.dataset.id;
    tabContent.forEach(function(el) {
        el.classList.remove("active");
     });
  tabLinks.forEach(function(el) {
        el.classList.remove("active");
     });

     document.querySelector("#" + id).classList.add("active");
     btnTarget.classList.add("active");
  }
