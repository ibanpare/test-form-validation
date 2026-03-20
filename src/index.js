import "./styles.css";

const emailError = document.querySelector("#email + span");
const email = document.getElementById("email");
const postalcode = document.getElementById("postalcode");
const postalcodeError = document.querySelector("#postalcode + span");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span");
const confirmPassword = document.getElementById("#confirm-password");

function emailCheck() {
  if (email.validity.typeMismatch) {
    emailError.textContent = "This is not an email address";
    emailError.className = "error active";
    //se mi servisse bloccare il submit potrei fare setcustomvalidity così poi faccio il check customValidity true or false
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
  console.log("checking");
  const testRegEx = new RegExp(postalcodeRules[country.value][0]);
  if (testRegEx.test(postalcode.value)) {
    postalcodeError.textContent = "";
    postalcodeError.className = "";
  } else {
    postalcodeError.textContent = postalcodeRules[country.value][1];
    postalcodeError.className = "error active";
  }
}

email.addEventListener("input", () => emailCheck());
email.addEventListener("focusout", () => emailCheck());
password.addEventListener("input", () => passwordCheck());
password.addEventListener("focusout", () => passwordCheck());
postalcode.addEventListener("input", () => postalcodeCheck());
postalcode.addEventListener("focusout", () => postalcodeCheck());
