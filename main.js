


//swiper js
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  //sticky nav

  window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
  });

  const menubtn = document.querySelector(".small-menu");
  const Close = document.querySelector(".close");
  const navigation = document.querySelector(".navigation");


  menubtn.addEventListener("click",()=>{
    navigation.classList.add("active");
  

  });
  
 
 

  Close.addEventListener("click",()=>{
    navigation.classList.remove("active");

  });






