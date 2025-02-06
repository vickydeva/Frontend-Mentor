const result = document.getElementById("rating-result");
const main = document.querySelector(".main-section");
const thanks = document.querySelector(".thanks-section");
const ratingBtns = document.querySelectorAll(".rating");

let displayRating = 0;

// * function to show and the pages & result

function showRating() {
  main.classList.add("hide");
  thanks.classList.remove("hide");
  result.innerText = displayRating;
}

// * adding event listener to all the rating buttons.

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", getNum);
});



//* 1. toggle the active class
//* 2.capture & assing the rating value.

function getNum(e) {
  e.target.classList.toggle("active");
  displayRating = e.target.innerText;
  return displayRating;
}
