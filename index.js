let change_rating = document.querySelector(".rated");
let stars = document.querySelectorAll(".stars");
// for (let i = 0; i < document.querySelectorAll(".stars").length; i++) {
//     document.querySelectorAll(".stars")[i].addEventListener("click", function () {
//       let new_rating = this.innerHTML
//       console.log(new_rating);
//       change_rating.innerHTML = new_rating;
//     });
// }
    stars.forEach(star => {
        star.addEventListener("click", function(){
            console.log(star.innerHTML);
            change_rating.innerHTML = star.innerHTML;  
        })
    });

let hide_1 = document.querySelector(".card2");
let hide_2 = document.querySelector(".card")
let submit = document.querySelector(".submit");
submit.addEventListener("click", function(){
  console.log(this);
  hide_2.classList.add("hidden");
  hide_1.classList.remove("hidden");
  
})