import "./styles.css";

const emailError = document.querySelector("#email + span");
const email = document.getElementById("email");
const postalcode = document.getElementById("postalcode");
const postalcodeError = document.querySelector("#postalcode + span");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span");
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password + span");
const form = document.querySelector("form");

function emailCheck() {
  if (email.validity.typeMismatch) {
    emailError.textContent = "This is not an email address";
    emailError.className = "error active";
    email.setCustomValidity = "This is not an email address";
  } else {
    emailError.textContent = "";
    emailError.className = "";
    email.setCustomValidity = "";
  }
}

function passwordCheck() {
  if (password.validity.patternMismatch) {
    passwordError.textContent =
      "Please have at least eight characters, at least one letter and one number";
    passwordError.className = "error active";
    password.setCustomValidity =
      "Please have at least eight characters, at least one letter and one number";
  } else {
    passwordError.textContent = "";
    passwordError.className = "";
    password.setCustomValidity = "";
  }
}

function confirmPasswordCheck() {
  if (confirmPassword.value === password.value) {
    confirmPasswordError.textContent = "The two passwords don't match";
    confirmPasswordError.className = "error active";
    confirmPassword.setCustomValidity = "The two passwords don't match";
  } else {
    confirmPasswordError.textContent = "";
    confirmPasswordError.className = "";
    confirmPassword.setCustomValidity = "";
  }
}

function postalcodeCheck() {
  const country = document.querySelector("option:checked");
  const postalcodeRules = {
    it: ["^\\d{5}$", "Il codice postale ha cinque cifre"],
    gb: [
      "^[A-Z]{1,2}\\d[A-Z\\d]?\\s?\\d[A-Z]{2}$",
      "That's not a valid postal code according to my crazy complex regEx",
    ],
    fr: ["^\\d{5}$", "Pretend this is French"],
    de: ["^\\d{5}$", "Pretend this is German"],
    es: ["^(0[1-9]|[1-4]\\d|5[0-2])\\d{3}$", "Codigo postal incorrecto"],
  };

  const testRegEx = new RegExp(postalcodeRules[country.value][0]);
  if (testRegEx.test(postalcode.value)) {
    postalcodeError.textContent = "";
    postalcodeError.className = "";
    postalcode.setCustomValidity = "";
  } else {
    postalcodeError.textContent = postalcodeRules[country.value][1];
    postalcodeError.className = "error active";
    postalcode.setCustomValidity = "Postal code not valid";
  }
}

email.addEventListener("input", () => emailCheck());
email.addEventListener("focusout", () => emailCheck());
password.addEventListener("input", () => passwordCheck());
password.addEventListener("focusout", () => passwordCheck());
confirmPassword.addEventListener("input", () => confirmPasswordCheck());
confirmPassword.addEventListener("focusout", () => confirmPasswordCheck());
postalcode.addEventListener("input", () => postalcodeCheck());
postalcode.addEventListener("focusout", () => postalcodeCheck());
form.addEventListener("submit", (event) => {
  if (
    !email.validity.valid ||
    !password.validity.valid ||
    !confirmPassword.validity.valid ||
    !postalcode.validity.valid
  ) {
    event.preventDefault();
  }
});
