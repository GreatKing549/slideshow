let slideIndex = 1;
showSlides(slideIndex);

//Forward and Backward buttons appear on hover
function appearNavs() {
  var appear = document.getElementById("navs");
  if (appear.style.opacity == 0) {
    appear.style.opacity = 1;
  } else {
    appear.style.opacity = 0;
  }
}

//Forward and Backward controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
