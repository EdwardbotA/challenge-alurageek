export const typeError = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "stepMismatch",
];

export const messages = {
  nombre: {
    valueMissing: "El campo nombre no puede esta vacio",
    tooShort: "El nombre tiene que ser al menos de 3 caracteres",
  },
  precio: {
    valueMissing: "El campo precio no puede esta vacio",
    stepMismatch: "no se aceptan numeros decimales",
  },
  url_imagen: {
    valueMissing: "El campo URL no puede esta vacio",
    typeMismatch: "Por favor, ingresa una URL valida",
    patternMismatch: "La URL no tiene un formato de imagen valido (jpg, png, webp o jpeg)",
  },
};
