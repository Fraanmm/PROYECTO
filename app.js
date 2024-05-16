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
      loginForm.classList.remove("fondo")
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


  