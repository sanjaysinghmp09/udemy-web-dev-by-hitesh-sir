
document.addEventListener("DOMContentLoaded" , ()=> {
  const products = [
    {id : 1, name : "Product" , price: 29.99},
    {id : 2, name : "Product" , price: 19.99},
    {id : 3, name : "Product" , price: 59.99},
  ];

  const cart = []
  const productList = document.getElementById("product-list") ;
  const cartItems = document.getElementById('cart-items')
  const emptyCartMessage = document.getElementById('empty-cart')
  const cartTotalMessage = document.getElementById('total-price')
  const checkout = document.getElementById('checkout-btn')
})