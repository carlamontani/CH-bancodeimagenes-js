//funcion SHOPPING CART 

let cart = [];

function addToCart(id){   

  let newLi = document.createElement("li");
  let newProduct = document.createTextNode("img" + id);
  newLi.appendChild(newProduct);
  
  let parentUl = document.getElementById("my-shopping-cart");
  let currentDiv = document.getElementById("li");
  parentUl.insertBefore(newLi, currentDiv);

  console.log(id);
  cart.push(id);
  return cart;
  
}

console.log(cart)



function ShoppingCart() {
  var cart = [];

  this.populate = function() {
    cart = this.get();
  };

  this.add = function(product) {
    //AGREGAR productos
    cart.push(product);
  };
  console.log('jola2')

  this.remove = function() {
    //ELIMINAR productos
  };

  this.existItem = function() {
    //
  };

  this.get = function() {
    //muestra productos de shoppingcart
    return cart;
  };

  this.selectId = function productSelection(id) {
    let productSelected = [];
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      if (product.id === id) {
        productSelected.push(product);
      }
    }
    return productSelected;
  };
}