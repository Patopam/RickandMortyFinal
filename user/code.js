document.addEventListener("DOMContentLoaded", function () {
  const cambiarFotoBtn = document.querySelector(".cambiar-foto-btn");
  const seleccionarFotoInput = document.querySelector(".seleccionar-foto");
  const fotoPerfil = document.querySelector(".foto-perfil");

  // Recuperar la imagen de perfil guardada en localStorage al cargar la página
  const fotoPerfilBase64Guardada = localStorage.getItem("fotoPerfilBase64");
  if (fotoPerfilBase64Guardada) {
    fotoPerfil.src = fotoPerfilBase64Guardada;
  }

  cambiarFotoBtn.addEventListener("click", function () {
    // Cuando se hace clic en el botón, activa el input de selección de archivo
    seleccionarFotoInput.click();
  });

  seleccionarFotoInput.addEventListener("change", function () {
    // Cuando el usuario selecciona una nueva imagen, cambia la imagen de perfil
    if (seleccionarFotoInput.files && seleccionarFotoInput.files[0]) {
      const nuevaFoto = seleccionarFotoInput.files[0];
      
      // Convierte la imagen a Base64
      const reader = new FileReader();
      reader.onload = function (e) {
        const nuevaFotoBase64 = e.target.result;

        // Muestra la imagen
        fotoPerfil.src = nuevaFotoBase64;

        // Guarda la nueva imagen de perfil en localStorage
        localStorage.setItem("fotoPerfilBase64", nuevaFotoBase64);
      };
      reader.readAsDataURL(nuevaFoto);
    }
  });
});

  
document.addEventListener("DOMContentLoaded", function () {
  const cambiarFotoBtn = document.querySelector(".cambiar-foto-btn");
  const seleccionarFotoInput = document.querySelector(".seleccionar-foto");
  const fotoPerfil = document.querySelector(".foto-perfil");
  const nombreInput = document.getElementById("nombreInput");
  const apellidoInput = document.getElementById("apellidoInput");
  const emailInput = document.getElementById("emailInput");
  const contrasenaInput = document.getElementById("contrasenaInput");
  const guardarCambiosBtn = document.getElementById("guardarCambiosBtn");
  const nombreUsuarioElement = document.querySelector(".nombre-usuario h1");

  // Recuperar la imagen de perfil guardada en localStorage al cargar la página
  const fotoPerfilBase64Guardada = localStorage.getItem("fotoPerfilBase64");
  if (fotoPerfilBase64Guardada) {
    fotoPerfil.src = fotoPerfilBase64Guardada;
  }

  cambiarFotoBtn.addEventListener("click", function () {
    // Cuando se hace clic en el botón, activa el input de selección de archivo
    seleccionarFotoInput.click();
  });

  seleccionarFotoInput.addEventListener("change", function () {
    // Cuando el usuario selecciona una nueva imagen, cambia la imagen de perfil
    if (seleccionarFotoInput.files && seleccionarFotoInput.files[0]) {
      const nuevaFoto = seleccionarFotoInput.files[0];
      
      // Convierte la imagen a Base64
      const reader = new FileReader();
      reader.onload = function (e) {
        const nuevaFotoBase64 = e.target.result;

        // Muestra la imagen
        fotoPerfil.src = nuevaFotoBase64;

        // Guarda la nueva imagen de perfil en localStorage
        localStorage.setItem("fotoPerfilBase64", nuevaFotoBase64);

        // Restablece el valor del input de selección de fotos para evitar la apertura múltiple
        seleccionarFotoInput.value = null;
      };
      reader.readAsDataURL(nuevaFoto);
    }
  });

  // Restablecer el valor del input de selección de fotos al hacer clic en el botón GUARDAR CAMBIOS
  guardarCambiosBtn.addEventListener("click", function () {
    seleccionarFotoInput.value = null;
  });

  // Recuperar el valor del nombre guardado en localStorage al cargar la página
  nombreInput.value = localStorage.getItem("nombre") || "";
  apellidoInput.value = localStorage.getItem("apellido") || "";
  emailInput.value = localStorage.getItem("email") || "";
  contrasenaInput.value = localStorage.getItem("contrasena") || "";

  // Actualizar el contenido del elemento con clase "nombre-usuario"
  nombreUsuarioElement.textContent = nombreInput.value + " " + apellidoInput.value;

  // Manejar el evento de clic en el botón "GUARDAR CAMBIOS"
  guardarCambiosBtn.addEventListener("click", function () {
    // Guardar los valores en localStorage
    localStorage.setItem("nombre", nombreInput.value);
    localStorage.setItem("apellido", apellidoInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("contrasena", contrasenaInput.value);

    // Actualizar el contenido del elemento con clase "nombre-usuario"
    nombreUsuarioElement.textContent = nombreInput.value + " " + apellidoInput.value;

    // Recargar la página
    window.location.reload();
  });
});

