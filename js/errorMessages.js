export const typeError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "stepMismatch",
  'rangeUnderflow'
];

export const messages = {
  nombre: {
    valueMissing: "El campo nombre no puede esta vacio",
    tooShort: "El nombre tiene que ser al menos de 3 caracteres",
  },
  precio: {
    valueMissing: "El campo precio no puede esta vacio",
    stepMismatch: "no se aceptan numeros decimales",
    rangeUnderflow: "El precio no puede ser 0"
  },
  url_imagen: {
    valueMissing: "El campo URL no puede esta vacio",
    patternMismatch: "Por favor, ingresa una URL valida y que termine en un formato de imagen valido (jpg, png, webp o jpeg)",
  },
};
