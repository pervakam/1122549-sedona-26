var link = document.querySelector(".check-button");
var	popup = document.querySelector(".booking");
var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=check-in]");
var checkout = popup.querySelector("[name=check-out]");
var adults = popup.querySelector("[name=adults]");
var childrens = popup.querySelector("[name=childrens]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
  checkin.focus();
});

form.addEventListener("submit", function (evt) {
  if (!checkin.value || !checkout.value || !adults.value || !childrens.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
