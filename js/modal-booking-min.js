var link=document.querySelector(".check-button"),popup=document.querySelector(".booking"),checkin=popup.querySelector("[name=check-in]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("modal-show"),checkin.focus()});
