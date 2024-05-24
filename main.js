function validar(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let email = document.getElementById("email").value;
  let mostrarErrores = document.getElementById("errores");

  mostrarErrores.innerHTML = "";
  let esValido = true;

  if (nombre === "" || nombre.length > 35) {
    const spanError = document.createElement("span");
    spanError.innerHTML = " *Ingrese un nombre válido";
    spanError.className = "color-rojo";
    mostrarErrores.appendChild(spanError);
    mostrarErrores.appendChild(document.createElement("br"));
    esValido = false;
  }

  if (edad == "" || edad < 0 || edad > 100) {
    const spanError = document.createElement("span");
    spanError.innerHTML = " *La edad debe ser un número entre 1 y 100";
    spanError.className = "color-rojo";
    mostrarErrores.appendChild(spanError);
    mostrarErrores.appendChild(document.createElement("br"));
    esValido = false;
  }
  if (email === "") {
    const spanError = document.createElement("span");
    spanError.innerHTML =
      " *Por favor introduce una dirección de correo electrónico";
    spanError.className = "color-rojo";
    mostrarErrores.appendChild(spanError);
    mostrarErrores.appendChild(document.createElement("br"));
    esValido = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const spanError = document.createElement("span");
    spanError.innerHTML = " *El correo electrónico ingresado no es válido";
    spanError.className = "color-rojo";
    mostrarErrores.appendChild(spanError);
    mostrarErrores.appendChild(document.createElement("br"));
    esValido = false;
  }

  mostrarMensaje(nombre, edad, email);
  limpiarFormulario();
  return false;
}

function mostrarMensaje(nombre, edad, email) {
  let mensajesUl = document.getElementById("mensajes");
  mensajesUl.innerHTML = "";
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
