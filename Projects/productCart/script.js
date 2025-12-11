document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 101, name: "Bronze Pack", price: 29.99 },
    { id: 102, name: "Silver Pack", price: 49.99 },
    { id: 103, name: "Gold Pack", price: 79.99 },
    { id: 104, name: "Platinum  Pack", price: 109.99 },
    { id: 105, name: "Diamond Pack", price: 159.99 },
  ];

  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("total-price");
  const checkout = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span> ${product.name} - $ ${product.price.toFixed(2)} </span>
    <button data-id="${product.id}">Add to Cart</button>
    `;

    productList.appendChild(productDiv);
  });


  productList.addEventListener("click" , (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log("clicked")
    }
  
  } 

  )


});
