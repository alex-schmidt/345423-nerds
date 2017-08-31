// Modal
var link = document.querySelector(".js-open-feedback");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal-close");

var form = modal.querySelector(".feedback-form");
var user = form.querySelector("[name=user]");
var mail = form.querySelector("[name=mail]");
var message = form.querySelector("[name=message]");

link.addEventListener("click", function(event){
  event.preventDefault();
  modal.classList.add("modal-show");
  user.focus();
});

close.addEventListener("click", function(event){
  event.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!user.value || !mail.value || !message.value) {
    event.preventDefault();
    modal.classList.add("modal-error");
  }
})

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      event.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
