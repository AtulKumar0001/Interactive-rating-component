"use strict";
const submit = document.querySelector(".submit");
const change_rating = document.querySelector(".rated");
let rated = false;
let rating = 0;
const hide_1 = document.querySelector(".card2");
const hide_2 = document.querySelector(".card");
const stars = document.querySelectorAll(".stars");
for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    rating = Number(stars[i].innerHTML);
    rated = true;
  });
}
const submit2 = function () {
  if (rated) {
    hide_2.classList.add("hidden");
    hide_1.classList.remove("hidden");
    change_rating.innerHTML = rating;
    rated = false;
  } else alert("Please Rate first");
};
submit.addEventListener("click", submit2);
