var feedback = document.querySelector(".btn-adress");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us-close");
var form = document.querySelector(".write-us form");
var userName = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");
var textfield = popup.querySelector("textarea");
var storageUserName = localStorage.getItem("userName");
var storageMail = localStorage.getItem("mail");

feedback.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-show");
  if (storageUserName && storageMail) {
    userName.value = storageUserName;
    mail.value = storageMail;
    textfield.focus();
  } else if (!storageUserName && storageMail) {
    mail.value = storageMail;
    userName.focus();
  } else if (storageUserName && !storageMail) {
    userName.value = storageUserName;
    mail.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-show");
  popup.classList.remove("write-us-error");
})

form.addEventListener("submit", function(event) {
  if (!userName.value || !mail.value || !textfield.value) {
    event.preventDefault();
    popup.classList.remove("write-us-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("write-us-error");
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("mail", mail.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
    }
  } 
});