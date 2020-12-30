const squareAll = document.querySelector(".wrapper");
const square = document.querySelectorAll(".square");
const btn = document.querySelector(".btn");
let timer; 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
 let randomColor = setInterval(function() {
  square.forEach((e) => {
        e.style.backgroundColor = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')'; 
      });
}, 1000);
function generateBlocks() {
    squareAll.classList.toggle("wrapper-show");   
    if(squareAll.classList.contains("wrapper-show") === false) {
      clearInterval(randomColor);
    }  
}
btn.addEventListener("click", generateBlocks);
