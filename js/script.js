const modalOpenBtn = document.querySelector(".btn-open");
const modalCloseBtn = document.querySelector(".btn-close");
const modalBackground = document.querySelector(".modal-background");

modalOpenBtn.addEventListener("click", function () {
  modalBackground.style.display = "flex";
});

modalCloseBtn.addEventListener("click", function () {
  modalBackground.style.display = "none";
});

modalBackground.addEventListener("click", function (event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = "none";
  }
});

