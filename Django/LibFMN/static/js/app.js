document.addEventListener("DOMContentLoaded", () => {
  
  const loginButton = document.getElementById("loginButton");
  const loginForm = document.getElementById("loginForm");
  const loginFormContent = document.getElementById("loginFormContent");
  const registroFormContent = document.getElementById("registroFormContent");
  const iconoCerrar = document.querySelector(".icono-cerrar");

  loginButton.addEventListener("click", () => {
    loginForm.classList.add("active");
    loginFormContent.style.display = "block";
    registroFormContent.style.display = "none";
  });

  iconoCerrar.addEventListener("click", () => {
    loginForm.classList.remove("active");
  });

  const registrarLink = document.querySelector(".registrar-link");
  const loginLink = document.querySelector(".login-link");

  registrarLink.addEventListener("click", () => {
    registroFormContent.style.display = "block";
    loginFormContent.style.display = "none";
  });

  loginLink.addEventListener("click", () => {
    loginFormContent.style.display = "block";
    registroFormContent.style.display = "none";
  });
  
  const registrarButton = document.getElementById("registrarButton");
  const nombreUsuarioInput = document.getElementById("nombreUsuario");
  const correoInput = document.getElementById("correo");
  const contrasenaInput = document.getElementById("contrasena");

  registrarButton.addEventListener("click", () => {
      const nombreUsuario = nombreUsuarioInput.value;
      const correo = correoInput.value;
      const contrasena = contrasenaInput.value;

      // Validación del nombre de usuario
      if (nombreUsuario.length < 8 || !/^[a-zA-Z0-9]+$/.test(nombreUsuario)) {
          alert("El nombre de usuario debe tener al menos 8 caracteres alfanuméricos.");
          return;
      }

      // Validación del correo electrónico
      if (!/@(gmail\.com|duocuc\.cl)$/.test(correo)) {
          alert("El correo electrónico debe ser de formato válido: @gmail.com o @duocuc.cl");
          return;
      }

      // Validación de la contraseña
      if (contrasena.length < 8 || !/[a-zA-Z]/.test(contrasena) || !/[0-9]/.test(contrasena)) {
          alert("La contraseña debe tener al menos 8 caracteres y contener letras y números.");
          return;
      }

      // Si todas las validaciones pasan, puedes proceder con el registro
      // Aquí puedes agregar el código para enviar los datos del formulario, etc.
  });
});

