import { typeError, messages } from "./errorMessages.js";

const formfields = [...document.querySelectorAll("[required]")];
const submitBtn = document.querySelector(".button__send");

formfields.forEach((field) => {
  field.addEventListener("blur", () => verifyFiled(field))
  field.addEventListener("invalid", (e) => e.preventDefault());
});

function verifyFiled(field) {
  let message = "";
  field.setCustomValidity("");

  typeError.forEach((error) => {
    if (field.validity[error]) {
      message = messages[field.name][error];
    }
  });

  const errorMessage = field.parentNode.querySelector(".mensaje-error");
  const inputValid = field.checkValidity();

  if (!inputValid) {
    errorMessage.textContent = message;
    submitBtn.setAttribute('disabled', '')
  } else {
    errorMessage.textContent = "";
    submitBtn.removeAttribute('disabled')
  }

  checkAllFields()
}

export default function checkAllFields() {
  let allValid = true;

  formfields.forEach((field) => {
    if (!field.checkValidity()) {
      allValid = false;
    }
  });

  if (allValid) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', '');
  }
}
