function validar(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let email = document.getElementById("email").value;
  let mostrarErrores = document.getElementById("errores");
  let errores = [];

  if (nombre.length === "") {
    errores.push("El campo nombre es obligatorio");
  } else if (nombre.length > 35) {
    errores.push("Se permite un maximo de 35 caracteres ");
  }

  if (isNaN(edad) || edad < 0 || edad > 100) {
    errores.push("La edad debe estar en un rango entre 0 y 100 años");
  }
  if (email === "") {
    errores.push("Por favor introduce una dirección de correo electronico");
  } else if (email.length > 0) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errores.push("El correo electrónico ingresado no es válido.");
    }
  }
  if (errores.length > 0) {
    console.log(errores);
    const spanError = document.createElement("span");
    spanError.textContent = errores.join(" ");
    spanError.className = "color-rojo";
    mostrarErrores.insertAdjacentElement("afterend", spanError);
    console.log(spanError);

    /* mostrarErrores(errores); */
    //console.log(mostrarErrores(errores));
    return false;
  }
  mostrarMensaje(nombre, edad, email);
  limpiarFormulario();
  return false;
}
/* function mostrarErrores(errores) {
  let erroresDiv = document.querySelector(".error");
  if (!erroresDiv) {
    erroresDiv = document.createElement("div");
    erroresDiv.className = "error";
    document.body.insertBefore(erroresDiv, document.querySelector("form"));
  }
  erroresDiv.innerHTML = errores.join("<br >");
} */
function mostrarMensaje(nombre, edad, email) {
  let mensajesUl = document.getElementById("mensajes");
  let mensajeLi = document.createElement("li");
  let mensaje;

  if (nombre.length > 0) {
    mensaje = `Tus datos fueron enviados correctamente, **${nombre}**. Edad: ${edad} años. Correo electrónico: ${email}.`;
  } else {
    mensaje = "Completa tus datos para enviar el formulario.";
  }

  mensajeLi.textContent = mensaje;
  mensajesUl.appendChild(mensajeLi);
}
function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("email").value = "";
  let erroresDiv = document.querySelector(".error");
  if (erroresDiv) {
    erroresDiv.remove();
  }
}
