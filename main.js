


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






  // ....form js.......
   
  
 
   const reqID = document.getElementById("reqId");
   const reqr =  document.getElementById("requires");
   const reqEmail = document.getElementById("reqEmail");
  
 
  function validate(){

    const names = document.querySelector("#user").value;
    const id = document.querySelector('#ID').value;
    const email = document.querySelector('#email').value;

    if(names == "" ){
         reqr.innerHTML = "***please input valid name";
       
          return false;

    }else if(!isNaN(names)){
         reqr.innerHTML = "nmbr not allowed  as name";
         return false;
    }
    
    if(id == ""  ){
      reqID.innerHTML = "***please input valid id";
    
       return false;
    } else if(isNaN(id)){
    reqID.innerHTML = "**ID must be only number!";
    
    return false;
 }
   
    

  
 
  };
  
  console.log("hello");