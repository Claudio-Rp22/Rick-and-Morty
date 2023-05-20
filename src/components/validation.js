export default (data) => {
  let error = {};
  if (data.email === "") {
    error.e1 = "El campo deber ser completado";
  }
  if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.e2 = "Debe ser un email";
  }

  if (data.email.length > 35) {
    error.e3 = "debe tener menos de 35 caracteres";
  }

  if (data.password === "") {
    error.p1 = "El campo deber ser completado";
  }

  if (!/\d/.test(data.password)) {
    error.p2 = "Debe contener al menos un numero";
  }

  if (data.password.length < 6 && data.password > 10) {
    error.p3 = "Debe tener entre 6 y 10 caracteres";
  }

  return error;
};
