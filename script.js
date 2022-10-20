"use strict";

const prevSlide = document.querySelectorAll(".prev-slide");
const nextSlide = document.querySelectorAll(".next-slide");
const cardJohn = document.querySelector(".container-john");
const cardTanya = document.querySelector(".container-tanya");

prevSlide.forEach((slide) =>
  slide.addEventListener("click", function (e) {
    cardJohn.classList.toggle("hide");
    cardTanya.classList.toggle("hide");
  })
);

nextSlide.forEach((slide) =>
  slide.addEventListener("click", function (e) {
    cardJohn.classList.toggle("hide");
    cardTanya.classList.toggle("hide");
  })
);
