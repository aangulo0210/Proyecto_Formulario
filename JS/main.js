//Contrasea superior o igual a 8 digitos
//Que los espacios de texto no esten vacios

function validar() {
  let valNombre = document.getElementById("name");
  let valorEntradaNom = valNombre.value;
  let valEmail = document.getElementById("email");
  let valorEntradaEmail = valEmail.value;
  let valPassword = document.getElementById("password");
  let valorEntradaPassword = valPassword.value;
  if (valorEntradaNom.trim().length == 0) {
    let alertNombre = document.getElementById("textName");
    alertNombre.innerText = "El nombre no puede estar vacio";
    alertNombre.style.color = "red";
    alertNombre.style.fontSize = "1.2rem";
  }
  if (valorEntradaEmail.trim().length == 0) {
    let alertEmail = document.getElementById("textEmail");
    alertEmail.innerText = "El correo no puede estar vacio";
    alertEmail.style.color = "red";
    alertEmail.style.fontSize = "1.2rem";
  }
  if (valorEntradaPassword.trim().length == 0) {
    let alertPassword = document.getElementById("textPassword");
    alertPassword.innerText = "La contraseña no puede estar vacia";
    alertPassword.style.color = "red";
    alertPassword.style.fontSize = "1.2rem";
  }
  if (
    valorEntradaPassword.trim().length < 8 &&
    valorEntradaPassword.trim().length > 0
  ) {
    let alertPassword = document.getElementById("textPassword");
    alertPassword.innerText = "La contraseña debe tener 8 digitos";
    alertPassword.style.color = "red";
    alertPassword.style.fontSize = "1.2rem";
  } else {
    window.location.href = "/Proyecto_Formulario/index.html";
  }
}
