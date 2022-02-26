
  //khai báo biến slideIndex đại diện cho slide hiện tại
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides(){
      var i;
      var slides = document.getElementsByClassName("newpage1");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++){
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      slideIndex++;
      if (slideIndex > slides.length - 1) {
        slideIndex = 0;
      }    
      setTimeout(showSlides, 4000);
      }
   showSlides(slideIndex = 0);
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  