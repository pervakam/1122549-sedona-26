var link = document.querySelector(".check-button");
var	popup = document.querySelector(".booking");
var checkin = popup.querySelector("[name=check-in]")
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  checkin.focus();
});
