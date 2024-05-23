function validar() {
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let email = document.getElementById("email").value;

  let errores = [];

  if (nombre.length === 0) {
    errores.push("El campo nombre es obligatorio");
  } else if (nombre.length > 35) {
    errores.push("Se permite un maximo de 35 caracteres ");
  }
  if (edad.length < 0 && email.length > 100) {
    errores.push("La edad debe estar en un rango entre 0 y 100 años");
  }
  if (email.length > 0) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errores.push("El correo electrónico ingresado no es válido.");
    }
  } else {
    errores.push("Por favor, introduce una dirección de correo electrónico.");
  }
  if (errores.length > 0) {
    mostrarErrores(errores);
    return false;
  }
  //mostrarMensaje(nombre,edad,mail);
  limpiarFormulario();
  return false;
}

function mostrarErrores(errores) {
  let erroresDiv = document.createElement("div");
  erroresDiv.className = "error";
  erroresDiv.textContent = errores.join(" ");
  document.body.insertBefore(erroresDiv, document.querySelector("form"));
}

/* function mostrarMensaje(nombre, edad, email) {
    let mensajesUl = document.getElementById("mensajes");
    let mensajeLi = document.createElement("li");
   
    mensajeLi.textContent = mensaje;
    
    if(nombre.le)

} */

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("email").value = "";
  let erroresDiv = document.querySelector(".error");
  if (erroresDiv) {
    erroresDiv.remove();
  }
}
