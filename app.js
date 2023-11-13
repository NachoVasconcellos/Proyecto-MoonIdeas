// funcion para galeria de imagenes
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

//funcion para menu hamburguesa

$(document).ready(function () {
  $(".hamb").click(function () {
    $("#nav-hamb").slideToggle();
  });

  // Al cambiar el tamaño de la pantalla
  $(window).resize(function () {
    if (window.innerWidth >= 1024) {
      $("#nav-hamb").removeAttr("style"); // Elimina el estilo inline
    }
  });
});
