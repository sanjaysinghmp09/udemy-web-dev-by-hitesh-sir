// Wait until the complete HTML document is loaded
document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // Product data (static for now)
  // -----------------------------
  const products = [
    { id: 101, name: "Bronze Pack", price: 29.99 },
    { id: 102, name: "Silver Pack", price: 49.99 },
    { id: 103, name: "Gold Pack", price: 79.99 },
    { id: 104, name: "Platinum  Pack", price: 109.99 },
    { id: 105, name: "Diamond Pack", price: 159.99 },
  ];

  // -----------------------------
  // Cart state
  // -----------------------------
  const cart = [];

  // -----------------------------
  // DOM Elements
  // -----------------------------
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("total-price");
  const checkout = document.getElementById("checkout-btn");

  // -----------------------------
  // Render product list
  // -----------------------------
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Product UI structure
    productDiv.innerHTML = `
      <span>${product.name} - $ ${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to Cart</button>
    `;

    productList.appendChild(productDiv);
  });

  // -----------------------------
  // Handle "Add to Cart" clicks
  // Event delegation used here
  // -----------------------------
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute('data-id')) ;
      const product =  products.find( p => p.id === productId);
      addToCart(product)
    
      // Future logic:
      // 1. Get product id from data-id
      // 2. Push product to cart
      // 3. Update cart UI and total price

    }
    
  });
  function addToCart(product) {
      cart.push(product)
      renderCart()
  }

  function renderCart() {
    cartItems.innerHTML = "" ;
    let totalPrice = 0 ;
    if (cart.length > 0) {
      emptyCartMessage.classList.add('hidden')
      cartTotalMessage.classList.remove('hidden');
      
    }else {
      emptyCartMessage.classList.remove('hidden');
    }
  }

});
