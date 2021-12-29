"use strict";

const modal = document.querySelector(".product-details");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".details-close");
const btnOpenModal = document.querySelectorAll(".product-more-details");

// Open modal

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Close modal

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
