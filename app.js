// Función para imágenes
$(document).ready(function () {
  const images = $(".image-gallery img");
  let index = 0;

  function showNextImage() {
    images.eq(index).removeClass("visible");
    index = (index + 1) % images.length;
    images.eq(index).addClass("visible");
  }

  function startImageGallery() {
    setInterval(showNextImage, 5000);
  }

  startImageGallery();
});

// Función para menú hamburguesa
$(document).ready(function () {
  function toggleNavHamburger() {
    $("#nav-hamb").slideToggle();
  }

  function resetNavHamburgerStyle() {
    if (window.innerWidth >= 1024) {
      $("#nav-hamb").removeAttr("style");
    }
  }

  $(".hamb").click(toggleNavHamburger);

  // Al cambiar el tamaño de la pantalla
  $(window).resize(resetNavHamburgerStyle);
});
