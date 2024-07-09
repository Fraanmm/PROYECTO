document.addEventListener("DOMContentLoaded", () => {
  // Variables para el formulario de inicio de sesión
  const loginButton = document.getElementById("loginButton");
  const loginForm = document.getElementById("loginForm");
  const loginFormContent = document.getElementById("loginFormContent");
  const registroFormContent = document.getElementById("registroFormContent");
  const iconoCerrar = document.querySelector(".icono-cerrar");

  // Mostrar el formulario de inicio de sesión al hacer clic en el botón de inicio de sesión
  loginButton.addEventListener("click", () => {
    loginForm.classList.add("active");
    loginFormContent.style.display = "block";
    registroFormContent.style.display = "none";
  });

  // Cerrar el formulario de inicio de sesión al hacer clic en el icono de cerrar
  iconoCerrar.addEventListener("click", () => {
    loginForm.classList.remove("active");
  });

  // Alternar entre el formulario de registro y el formulario de inicio de sesión al hacer clic en los enlaces correspondientes
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

  // Validación y manejo del registro de usuario
  const registrarButton = document.getElementById("registrarButton");
  const nombreUsuarioInput = document.getElementById("nombreUsuario");
  const correoInput = document.getElementById("correo");
  const contrasenaInput = document.getElementById("contrasena");

  registrarButton.addEventListener("click", () => {
    const nombreUsuario = nombreUsuarioInput.value.trim();
    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

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

    // Aquí puedes enviar los datos del formulario de registro al servidor si es necesario
  });

  // Mostrar y ocultar el carrito de compras
  const btnCart = document.querySelector(".container-cart-icon");
  const containerCartProducts = document.querySelector(".container-cart-products");

  btnCart.addEventListener("click", () => {
    containerCartProducts.classList.toggle("hidden-cart");
  });

  // Funcionalidad de agregar productos al carrito
  const productsList = document.querySelector(".container-items");
  let allProducts = [];
  const rowProduct = document.querySelector(".row-product");
  const valorTotal = document.querySelector(".total-pagar");
  const countProducts = document.querySelector("#contador-productos");
  const cartEmpty = document.querySelector(".cart-empty");
  const cartTotal = document.querySelector(".cart-total");

  productsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add-cart")) {
      const product = e.target.closest(".product");
      const infoProduct = {
        quantity: 1,
        title: product.querySelector("h2").textContent,
        price: product.querySelector("p").textContent,
      };

      const exists = allProducts.some((product) => product.title === infoProduct.title);
      if (exists) {
        allProducts = allProducts.map((product) => {
          if (product.title === infoProduct.title) {
            product.quantity++;
          }
          return product;
        });
      } else {
        allProducts.push(infoProduct);
      }
      showHTML();
    }
  });

  rowProduct.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close")) {
      const productTitle = e.target.parentElement.querySelector(".titulo-producto-carrito").textContent;
      allProducts = allProducts.filter((product) => product.title !== productTitle);
      showHTML();
    }
  });

  const showHTML = () => {
    if (allProducts.length === 0) {
      cartEmpty.classList.remove("hidden");
      rowProduct.classList.add("hidden");
      cartTotal.classList.add("hidden");
    } else {
      cartEmpty.classList.add("hidden");
      rowProduct.classList.remove("hidden");
      cartTotal.classList.remove("hidden");
    }

    rowProduct.innerHTML = "";
    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach((product) => {
      const containerProduct = document.createElement("div");
      containerProduct.classList.add("cart-product");
      containerProduct.innerHTML = `
        <div class="info-cart-product">
          <span class="cantidad-producto-carrito">${product.quantity}</span>
          <p class="titulo-producto-carrito">${product.title}</p>
          <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon-close"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      `;
      rowProduct.append(containerProduct);
      total += parseInt(product.quantity * product.price.slice(1));
      totalOfProducts += product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
  };

  // Mostrar sugerencias al escribir en la barra de búsqueda
  document.getElementById("inputSearch").addEventListener("input", function () {
    const searchTerm = this.value.trim().toLowerCase();
    const listItems = document.querySelectorAll("#box-search li");

    listItems.forEach((item) => {
      const text = item.textContent.trim().toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    document.getElementById("box-search").style.display = "block";
  });

  // Funcionalidad de los botones de saga
  const buttons = document.querySelectorAll(".btn-theme");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const saga = button.dataset.theme;
      mostrarCartas(saga);
    });
  });

  function mostrarCartas(saga) {
    const container = document.getElementById("container-cartas");
    container.innerHTML = "";

    const sagas = {
      reinaroja: [
        { nombre: "Libro 1", precio: "$20", imagen: "libro1.jpg" },
        { nombre: "Libro 2", precio: "$25", imagen: "libro2.jpg" },
        { nombre: "Libro 3", precio: "$30", imagen: "libro3.jpg" },
      ],
      otraeditorial: [
        { nombre: "Libro A", precio: "$22", imagen: "libroA.jpg" },
        { nombre: "Libro B", precio: "$27", imagen: "libroB.jpg" },
        { nombre: "Libro C", precio: "$32", imagen: "libroC.jpg" },
      ],
      // Agregar más sagas si es necesario
    };

    const libros = sagas[saga];

    if (libros && libros.length > 0) {
      libros.forEach((libro) => {
        const carta = document.createElement("div");
        carta.classList.add("carta-libro");
        carta.innerHTML = `
          <div class="imagen-libro">
            <img src="destacado/sagas/${saga}/${libro.imagen}" alt="${libro.nombre}">
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

  // Mostrar formulario de registro al hacer clic en el botón de registro
  document.getElementById("register-button").addEventListener("click", function () {
    document.getElementById("register-form").style.display = "block";
  });
});
