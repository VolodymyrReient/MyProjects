const dots = document.querySelectorAll(".dot");

let opacity = 1;

dots.forEach((element) => {
  opacity -= 0.1;
  opacity = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;
  element.style.background = `rgba(51, 51, 51, ${opacity})`;
});
