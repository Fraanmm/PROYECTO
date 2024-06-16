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

      /* Validación del nombre de usuario  */ 
      if (nombreUsuario.length < 8 || !/^[a-zA-Z0-9]+$/.test(nombreUsuario)) {
          alert("El nombre de usuario debe tener al menos 8 caracteres alfanuméricos.");
          return;
      }

      /* Validación del correo electrónico */
      if (!/@(gmail\.com|duocuc\.cl)$/.test(correo)) {
          alert("El correo electrónico debe ser de formato válido: @gmail.com o @duocuc.cl");
          return;
      }

      /* Validación de la contraseña*/
      if (contrasena.length < 8 || !/[a-zA-Z]/.test(contrasena) || !/[0-9]/.test(contrasena)) {
          alert("La contraseña debe tener al menos 8 caracteres y contener letras y números.");
          return;
      }


    /* cartas */
    const btnCart = document.querySelector(".container-cart-icon");
    const containerCartProducts = document.querySelector(".container-cart-products");
  
    btnCart.addEventListener("click", () => {
      containerCartProducts.classList.toggle("hidden-cart");
    });
  
    const rowProduct = document.querySelector(".row-product");
    const productsList = document.querySelector(".container-items");
    let allProducts = [];
    const valorTotal = document.querySelector(".total-pagar");
    const countProducts = document.querySelector("#contador-productos");
    const cartEmpty = document.querySelector(".cart-empty");
    const cartTotal = document.querySelector(".cart-total");
  
    productsList.addEventListener("click", e => {
      if (e.target.classList.contains("btn-add-cart")) {
        const product = e.target.parentElement;
        const infoProduct = {
          quantity: 1,
          title: product.querySelector("h2").textContent,
          price: product.querySelector("p").textContent,
        };
  
        const exists = allProducts.some(product => product.title === infoProduct.title);
        if (exists) {
          const products = allProducts.map(product => {
            if (product.title === infoProduct.title) {
              product.quantity++;
              return product;
            } else {
              return product;
            }
          });
          allProducts = [...products];
        } else {
          allProducts = [...allProducts, infoProduct];
        }
        showHTML();
      }
    });
  
    rowProduct.addEventListener("click", e => {
      if (e.target.classList.contains("icon-close")) {
        const product = e.target.parentElement;
        const title = product.querySelector("p").textContent;
  
        allProducts = allProducts.filter(product => product.title !== title);
        showHTML();
      }
    });
  
    const showHTML = () => {
      if (!allProducts.length) {
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
  
      allProducts.forEach(product => {
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
  });

  /* BARRA DE BUSQUEDA */

  // Mostrar la caja de sugerencias al escribir en la barra de búsqueda
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
  })

  /* Validar registro
  Usuario minimo 8 letras
  correo con formato @gmail|@live|etc
  contraseña minimo 8 letras/numeros
  */


  /* btn sagas */
  document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-theme");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const saga = button.dataset.theme;
      mostrarCartas(saga);
    });
  });

  function mostrarCartas(saga) {
    // Contenedor de cartas
    const container = document.getElementById("container-cartas");
    // Limpia el contenido actual
    container.innerHTML = "";
    
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
      ],
      // Agrega más sagas con sus respectivos datos de libros si es necesario
    };

    const libros = sagas[saga];

    if (libros && libros.length > 0) {
      libros.forEach((libro) => {
        // Crea un nuevo elemento para la carta del libro
        const carta = document.createElement("div");
        carta.classList.add("carta-libro");

        // Construye el contenido de la carta del libro
        carta.innerHTML = `
          <div class="imagen-libro">
            <img src="destacado/sagas/${saga}/${libro.imagen}" alt="${libro.nombre}">
          </div>
          <div class="info-libro">
            <h3>${libro.nombre}</h3>
            <p>Precio: ${libro.precio}</p>
          </div>
        `;

        // Agrega la carta del libro al contenedor
        container.appendChild(carta);
      });
    } else {
      // Si no hay libros para mostrar, muestra un mensaje
      container.innerHTML = "<p>No hay libros disponibles para esta saga.</p>";
    }
  }

});
});
