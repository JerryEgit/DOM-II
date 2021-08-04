// Your code goes here
const bus = document.querySelector(".intro img");

bus.addEventListener("mouseover", function (event) {
  bus.style.filter = "invert(100%)";
});
bus.addEventListener("mouseout", function (event) {
  bus.style.filter = "invert(0%)";
});

const pics = document.querySelectorAll(".content-section .img-content img");

pics[0].addEventListener("mouseover", function (event) {
  this.style.filter = "grayscale(100%)";
});
pics[0].addEventListener("mouseout", function (event) {
  this.style.filter = "grayscale(0%)";
});

pics[1].addEventListener("mouseover", function (event) {
  this.style.filter = "saturate(7)";
});
pics[1].addEventListener("mouseout", function (event) {
  this.style.filter = "saturate(1)";
});

document.querySelector("header").style.zIndex = 999;

bus.addEventListener("click", function (event) {
  window.open("https://www.youtube.com/watch?v=BMUiFMZr7vk", "_blank");
});

document.addEventListener("scroll", function (event) {
  let scrollNum = window.scrollY;
  let yLimit = document.body.offsetHeight - window.innerHeight;
  //console.log(scrollNum + ", " + yLimit);
  colorNum = 255 - (scrollNum / yLimit) * 255;
  document.body.style.background = rgb(255, ${colorNum}, ${colorNum});
});