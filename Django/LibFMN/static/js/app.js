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

// static/js/administrador.js

$(document).ready(function() {
  // Manejar el envío del formulario de creación de usuario
  $('#crearUsuarioForm').on('submit', function(event) {
      event.preventDefault();  // Evitar el envío estándar del formulario
      var formData = $(this).serialize();  // Obtener los datos del formulario
      $.ajax({
          type: 'POST',
          url: '/crear_usuario/',  // URL de la vista para crear usuario
          data: formData,
          success: function(response) {
              $('#tablaUsuarios tbody').append(response.html_usuario);  // Añadir el usuario creado a la tabla
              $('#crearUsuarioForm')[0].reset();  // Limpiar el formulario
              // Mensaje de éxito o error si es necesario
              $('#messages').html(response.html_messages);
          },
          error: function(error) {
              // Manejar errores si es necesario
              console.log(error);
          }
      });
  });

  // Manejar la acción de editar usuario
  $(document).on('click', '.editar-usuario', function() {
      var usuarioId = $(this).data('id');
      // Implementar lógica para editar usuario (modal, formulario, etc.)
  });

  // Manejar la acción de eliminar usuario
  $(document).on('click', '.eliminar-usuario', function() {
      var usuarioId = $(this).data('id');
      $.ajax({
          type: 'POST',
          url: '/eliminar_usuario/',  // URL de la vista para eliminar usuario
          data: {
              'usuario_id': usuarioId,
              'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
          },
          success: function(response) {
              $('#usuario_' + usuarioId).remove();  // Eliminar el usuario de la tabla
              // Mensaje de éxito o error si es necesario
              $('#messages').html(response.html_messages);
          },
          error: function(error) {
              // Manejar errores si es necesario
              console.log(error);
          }
      });
  });
});

$(document).ready(function() {
    $('#crearUsuarioForm').on('submit', function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '{% url "crear_usuario" %}',  // Esta línea genera la URL adecuada
            data: formData,
            success: function(response) {
                $('#tablaUsuarios tbody').append(response.html_usuario);
                $('#crearUsuarioForm')[0].reset();
                $('.container').prepend(response.html_messages);
                $('.alert').alert();
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalAmount = document.querySelector(".total-amount");
  const clearCartBtn = document.querySelector(".btn-clear-cart");
  const checkoutBtn = document.querySelector(".btn-checkout");
  const cartIcon = document.querySelector(".fa-cart-shopping");
  const cartOffcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));

  let cart = [];

  function addToCart(product) {
    const existingItem = cart.find(item => item.title === product.title);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    renderCart();
    cartOffcanvas.show();
  }

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    totalAmount.textContent = `$${calculateTotal()}`;

    cart.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <div class="cart-item-details">
          <span>${item.quantity} x ${item.title}</span>
          <span>${item.price}</span>
        </div>
        <button class="btn btn-sm btn-danger btn-remove-item" data-title="${item.title}">Eliminar</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    const removeItemButtons = document.querySelectorAll(".btn-remove-item");
    removeItemButtons.forEach(button => {
      button.addEventListener("click", () => {
        const title = button.dataset.title;
        cart = cart.filter(item => item.title !== title);
        renderCart();
      });
    });
  }

  function calculateTotal() {
    return cart.reduce((total, item) => total + (parseFloat(item.price.slice(1)) * item.quantity), 0).toFixed(2);
  }

  clearCartBtn.addEventListener("click", () => {
    cart = [];
    renderCart();
  });

  checkoutBtn.addEventListener("click", () => {
    if (cart.length > 0) {
      alert(`Simulación de Pago: Total a Pagar $${calculateTotal()}`);
      cart = [];
      renderCart();
    } else {
      alert("El carrito está vacío. Agrega productos antes de pagar.");
    }
  });

  function addProductToCart(title, price) {
    addToCart({ title, price });
  }

  function updateCartIconCounter() {
    document.getElementById("contador-productos").textContent = cart.length;
  }

  cartIcon.addEventListener("click", () => {
    updateCartIconCounter();
  });

  const openCartBtn = document.getElementById("openCartBtn");
  openCartBtn.addEventListener("click", () => {
    cartOffcanvas.hide();
    updateCartIconCounter();
  });
});
