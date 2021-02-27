var instance = M.Carousel.init({
  fullWidth: true,
});

// Or with jQuery

$(".carousel.carousel-slider").carousel({
  fullWidth: true,
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems, null);
});

// Or with jQuery

$(document).ready(function () {
  $(".parallax").parallax();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("#back-top").fadeIn();
  } else {
    $("#back-top").fadeOut();
  }
});

$("#back-top").click(function () {
  $("html").animate({
    scrollTop: 0,
    options: 400,
  });
});

$(".close").click(function () {
  $(this).closest(".card").remove();
});
