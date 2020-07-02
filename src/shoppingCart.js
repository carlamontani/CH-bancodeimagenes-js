//funcion SHOPPING CART anda muuuy mal
var productSelected = [];
let itemPrice = [];
let html2 = [];
let totalPrice2 = [];
let item = [];
let price = [];
let sumaPrecio = [];

function startShoppingCart(id){

  //LA FUNCION DEL PRODUCT SELECTED QUE SOLO FUNCIONA AHI
  this.start = data.forEach(i => {
    if (i.id == id) {
      productSelected.push(i);
      item = (i);
    }
  });
  console.log(productSelected);
  //////////////////////////////////////////////////////////////////////

  //MI FUNCION DE AGREGAR AL CARRO QUE YA ANDA , cambiar los nombres
  function myFunction() {  

    let container2 = document.getElementById("my-shopping-cart");
    let containerinfo =  soytufuncion();

    function soytufuncion(){
      return `
        <div id="cart-item">
          <p>IMG${id} </p>
          <a href="#">
            <i class="far fa-window-close" id="icon ${id}"></i>
          </a>
        </div>
      `
    }

    html2 = html2 + containerinfo;
    container2.innerHTML = html2;   
  }
  myFunction()
  //////////////////////////////////////////////////////////////////////

  //console.log(item.price)
    function Price(id) {

        if (productSelected.id == id) { /////ver este if
          price.push(item.price);

          console.log(price)
          let reducesumaPrecio = (accumulator, currentValue) => accumulator + currentValue;
          sumaPrecio = price.reduce(reducesumaPrecio);
          console.log(sumaPrecio)
        }

        let containertotal = document.querySelector('#total');
        containertotal.innerHTML = sumaPrecio;
    }

    Price();
  };






/////////////////////////////////////////////////////////////////
//prubas para price


  //////////////////////////////////////////////////////////////////////


  //LA VERDADERA FUNCION DEL PRECIO toma todos los precio $$$$
  /* 
  Price();

  console.log(itemPrice);

  for (let i= 0 ; i<productSelected.length;i++){

    totalPrice = parseInt(productSelected[i].price);

    let containertotal = document.querySelector('#total');



    containertotal.innerHTML = totalPrice;

    totalPrice2.push(totalPrice);
    console.log(totalPrice2) 

  };
  
  console.log(totalPrice2)

  let reducesumaPrecio = (accumulator, currentValue) => accumulator + currentValue;
  let sumaPrecio = itemPrice.reduce(reducesumaPrecio);
  console.log(sumaPrecio)


  //FUNCION DEL PRECIO con el id del precio en el dom
  
  
}

  //LA VERDADERA FUNCION DEL PRECIO toma todos los precio $$$$
  function Price() {

    for (let i= 0 ; i<productSelected.length;i++){
      itemPrice.push(productSelected[i].price);

    };
    
  }
  Price();

  console.log(itemPrice);

  for (let i= 0 ; i<productSelected.length;i++){

    totalPrice = parseInt(productSelected[i].price);

    let containertotal = document.querySelector('#total');



    containertotal.innerHTML = totalPrice;

    totalPrice2.push(totalPrice);
    console.log(totalPrice2) */

  /////////////////////////////////////////////////////////////////////////















  // LA FUNCION DEL PADREHIJO EN EL DOM QUE FUNCIONA pero fue reemplazada
  /*
  let newLi = document.createElement("li");
  let newProduct = document.createTextNode("img" + id + "  " + "x");
  newLi.appendChild(newProduct);
  
  let parentUl = document.getElementById("my-shopping-cart");
  let currentDiv = document.getElementById("li");
  parentUl.insertBefore(newLi, currentDiv);
 */


/* 

function Imagenes() {
    for (let i= 0 ; i<productSelected.length;i++){
      price.push(productSelected[i].price);
    };
    console.log[price]
  }


for (let i= 0 ; i<productSelected.length;i++){
    console.log(productSelected[i].img)
  };


  this.init = function(productSelected) {
    this.productSelected = productSelected;
  }

  this.showCart = function(productSelected) {
    let newLi = document.createElement("li");
    let newProduct = document.createTextNode("img" + productSelected);
    newLi.appendChild(newProduct);
    
    let parentUl = document.getElementById("my-shopping-cart");
    let currentDiv = document.getElementById("li");
    parentUl.insertBefore(newLi, currentDiv);

  }











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
  var cart = ["prueba"];

  this.populate = function() {   ***
    cart = this.get();
  };

  this.add = function(product) {        ****
    //AGREGAR productos
    cart.push(product);
  };


  this.get = function() {           *****
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

*/