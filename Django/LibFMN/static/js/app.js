document.addEventListener("DOMContentLoaded", () => {

  // Variables de elementos del DOM para el formulario de inicio de sesión
  const loginButton = document.getElementById("loginButton");
  const loginForm = document.getElementById("loginForm");
  const loginFormContent = document.getElementById("loginFormContent");
  const registroFormContent = document.getElementById("registroFormContent");
  const iconoCerrar = document.querySelector(".icono-cerrar");

  // Mostrar el formulario de inicio de sesión al hacer clic en "Iniciar Sesión"
  loginButton.addEventListener("click", () => {
    loginForm.classList.add("active");
    loginFormContent.style.display = "block";
    registroFormContent.style.display = "none";
  });

  // Cerrar el formulario de inicio de sesión al hacer clic en el icono de cerrar
  iconoCerrar.addEventListener("click", () => {
    loginForm.classList.remove("active");
  });

  // Event listener para mostrar el formulario de registro al hacer clic en "Registrar"
  const registrarLink = document.querySelector(".registrar-link");
  registrarLink.addEventListener("click", () => {
    registroFormContent.style.display = "block";
    loginFormContent.style.display = "none";
  });

  // Event listener para mostrar el formulario de inicio de sesión al hacer clic en "Iniciar Sesión"
  const loginLink = document.querySelector(".login-link");
  loginLink.addEventListener("click", () => {
    loginFormContent.style.display = "block";
    registroFormContent.style.display = "none";
  });

  // Validación y manejo del registro de usuarios
  const registrarButton = document.getElementById("registrarButton");
  registrarButton.addEventListener("click", () => {
    const nombreUsuarioInput = document.getElementById("nombreUsuario");
    const correoInput = document.getElementById("correo");
    const contrasenaInput = document.getElementById("contrasena");

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

    // Aquí puedes agregar más lógica para enviar los datos de registro al servidor
    // Por ejemplo, usando fetch() para una solicitud POST al endpoint correspondiente

  });

  // Event listener para mostrar/ocultar la lista de sugerencias en la barra de búsqueda
  document.getElementById('inputSearch').addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var listItems = document.querySelectorAll('#box-search li');
    listItems.forEach(function(item) {
      var text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    document.getElementById('box-search').style.display = 'block';
  });

  // Event listener para mostrar los libros de cada saga al hacer clic en los botones temáticos
  const buttons = document.querySelectorAll(".btn-theme");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const saga = button.dataset.theme;
      mostrarCartas(saga);
    });
  });

  // Función para mostrar las cartas de libros de la saga seleccionada
  function mostrarCartas(saga) {
    const container = document.getElementById("container-cartas");
    container.innerHTML = ""; // Limpiar el contenido actual

    // Datos de ejemplo de libros para cada saga
    const sagas = {
      reinaroja: [
        { nombre: "Libro 1", precio: "$20", imagen: "libro1.jpg" },
        { nombre: "Libro 2", precio: "$25", imagen: "libro2.jpg" },
        { nombre: "Libro 3", precio: "$30", imagen: "libro3.jpg" }
      ],
      otraeditorial: [
        { nombre: "Libro A", precio: "$22", imagen: "libroA.jpg" },
        { nombre: "Libro B", precio: "$27", imagen: "libroB.jpg" },
        { nombre: "Libro C", precio: "$32", imagen: "libroC.jpg" }
      ]
      // Agrega más sagas con sus respectivos datos de libros si es necesario
    };

    const libros = sagas[saga];

    if (libros && libros.length > 0) {
      libros.forEach((libro) => {
        const carta = document.createElement("div");
        carta.classList.add("carta-libro");
        carta.innerHTML = `
          <div class="imagen-libro">
            <img src="static/css/images/${libro.imagen}" alt="${libro.nombre}">
          </div>
          <div class="info-libro">
            <h3>${libro.nombre}</h3>
            <p>Precio: ${libro.precio}</p>
          </div>
        `;
        container.appendChild(carta);
      });
    } else {
      container.innerHTML = "<p>No hay libros disponibles para esta saga.</p>";
    }
  }

});
