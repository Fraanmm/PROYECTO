document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("loginButton");
  const loginForm = document.getElementById("loginForm");
  const loginFormContent = document.getElementById("loginFormContent");
  const registerButton = document.getElementById("register-button"); // Agregamos selección del botón de registro
  const registerForm = document.getElementById("register-form"); // Agregamos selección del formulario de registro
  const iconoCerrar = document.querySelector(".icono-cerrar");

  // Función para mostrar el formulario de registro
  registerButton.addEventListener("click", () => {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  });

  // Función para cerrar el formulario
  iconoCerrar.addEventListener("click", () => {
    loginForm.classList.remove("active");
    registerForm.style.display = "none";
    loginFormContent.style.display = "block";
  });

  const registrarLink = document.querySelector(".registrar-link");
  const loginLink = document.querySelector(".login-link");

  registrarLink.addEventListener("click", () => {
    loginForm.classList.add("active");
    registroFormContent.style.display = "block";
    loginFormContent.style.display = "none";
  });

  loginLink.addEventListener("click", () => {
    loginFormContent.style.display = "block";
    registroFormContent.style.display = "none";
  });

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

  productsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add-cart")) {
      const product = e.target.parentElement;
      const infoProduct = {
        quantity: 1,
        title: product.querySelector("h2").textContent,
        price: parseFloat(product.querySelector("p").textContent.replace("$", "")),
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
      const product = e.target.parentElement;
      const title = product.querySelector("p").textContent;

      allProducts = allProducts.filter((product) => product.title !== title);

      showHTML();
    }
  });

  const showHTML = () => {
    if (allProducts.length === 0) {
      rowProduct.innerHTML = `<p>No hay productos en el carrito</p>`;
      valorTotal.innerText = "$0";
      countProducts.innerText = "0";
      return;
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
          <span class="precio-producto-carrito">$${(product.price * product.quantity).toFixed(2)}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      `;

      rowProduct.appendChild(containerProduct);

      total += product.price * product.quantity;
      totalOfProducts += product.quantity;
    });

    valorTotal.innerText = `$${total.toFixed(2)}`;
    countProducts.innerText = totalOfProducts;
  };
});

/* barra busqueda */
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}


//Buscador de contenido


//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";

}


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
});

function scrollToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// Función para desplazar la página hacia abajo
function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
