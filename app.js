$(document).ready(function () {
    const images = $(".image-gallery img");
    let index = 0;
  
    function showNextImage() {
      images.eq(index).removeClass("visible");
      index = (index + 1) % images.length;
      images.eq(index).addClass("visible");
    }
  
    setInterval(showNextImage, 5000);
  });