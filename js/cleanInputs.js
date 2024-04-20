const inputs = [...document.querySelectorAll('input')]

export default function cleanInputs() {
  let resetForm = inputs.map(reset => reset.value = '')
}

document.querySelector('.button__clear').addEventListener('click', cleanInputs)