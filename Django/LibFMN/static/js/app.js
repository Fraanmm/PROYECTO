document.addEventListener("DOMContentLoaded", () => {
  const productsList = document.querySelector(".container-items");
  const btnCart = document.getElementById("btnCart");
  const containerCartProducts = document.querySelector(".container-cart-products");
  const rowProduct = document.querySelector(".row-product");
  const totalAmount = document.getElementById("totalAmount");
  const cartItemCount = document.getElementById("cartItemCount");
  let allProducts = [];

  // Mostrar/Ocultar carrito
  btnCart.addEventListener("click", () => {
    containerCartProducts.classList.toggle("hidden-cart");
    showCart();
  });

  // Agregar producto al carrito
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

      showCart();
    }
  });

  // Mostrar productos en el carrito
  function showCart() {
    if (allProducts.length === 0) {
      rowProduct.innerHTML = `<p>No hay productos en el carrito</p>`;
      totalAmount.innerText = "$0.00";
      cartItemCount.innerText = "0";
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
        <button class="icon-close">Eliminar</button>
      `;

      rowProduct.appendChild(containerProduct);

      total += product.price * product.quantity;
      totalOfProducts += product.quantity;
    });

    totalAmount.innerText = `$${total.toFixed(2)}`;
    cartItemCount.innerText = totalOfProducts;
  }

  // Eliminar producto del carrito
  rowProduct.addEventListener("click", (e) => {
    if (e.target.classList.contains("icon-close")) {
      const productTitle = e.target.previousElementSibling.querySelector(".titulo-producto-carrito").textContent;
      allProducts = allProducts.filter((product) => product.title !== productTitle);
      showCart();
    }
  });

 
  const btnCheckout = document.getElementById("btnCheckout");
  btnCheckout.addEventListener("click", () => {
    alert("Función de pago aún no implementada. Esta es una simulación.");
    
  });
});


/* barra busqueda */
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}



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

