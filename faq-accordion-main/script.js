"use strict";
let accordianList = document.querySelectorAll(".accordian");
let minusList = document.querySelectorAll(".minus");
// let accordianItem = document.querySelector(".hide");

accordianList.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    
  });
});
