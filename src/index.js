import "./styles.css";

const emailError = document.querySelector("#email + span");
const email = document.getElementById("email");
const postalcode = document.getElementById("#postalcode");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span");
const confirmPassword = document.getElementById("#confirm-password");

function emailCheck() {
  if (email.validity.typeMismatch) {
    emailError.textContent = "This is not an email address";
    emailError.className = "error active";
  } else {
    emailError.textContent = "";
    emailError.className = "";
  }
}

function passwordCheck() {
  if (password.validity.patternMismatch) {
    passwordError.textContent =
      "Please have at least eight characters, at least one letter and one number";
    passwordError.className = "error active";
  } else {
    passwordError.textContent = "";
    passwordError.className = "";
  }
}

email.addEventListener("input", () => emailCheck());
email.addEventListener("focusout", () => emailCheck());
password.addEventListener("input", () => passwordCheck());
password.addEventListener("focusout", () => passwordCheck());
