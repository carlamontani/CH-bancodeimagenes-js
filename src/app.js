// EN WINDOW ONLOAD LLAMO A FUNCION IMAGEGALLERY, DECLARO A PRODUCTS, INIT INICIALIZO Y BUILD HTML
//let productSelected;
let products;
let addProduct = [];
let imagesDisplay = [];
let shoppingCart;

$(document).ready(function App() {
  
  products = new ImageGallery();
  
  var url = `https://api.unsplash.com/photos/random?count=24&client_id=EKBNZeJV2o9Yl5CtCgcjiSv8dLPXoaoqFRFyTBgK-ww`;

  $.ajax({
    method: "GET",
    url: url
  })
    .done(function(images) {
      console.log(images);

      products.init(images);

      products.buildHtml('image-gallery', 'data');
      
      shoppingCart =  new ShoppingCart();

      shoppingCart.populate();

      shoppingCart.buildHtml();

      // console.log(imagesDisplay)
    })

    .fail(function(error) {
      console.log(error);
    });

  headerMenu = $('#header-menu');

});

function hideCart(){
  $('#my-shopping-cart').toggle("slow");
  $('.fa-sort-down').toggleClass( "selected" );
}

function menutoggle(){
  headerMenu.toggle("slow");
}

function menuabouttoggle(){
  $('.menu-about').show("slow");
  headerMenu.toggle("fast");
}

function menucontacttoggle(){
  $('.menu-contact').show("slow");
  headerMenu.toggle("fast");
}

function closemenucontact(){
  $('.menu-contact').toggle("slow");
}

function closemenuabout(){
  $('.menu-about').toggle("slow");
}

function botonon(){
  $('.button ').toggle("fast");
}

function download(){
  document.getElementById("my-shopping-cart").innerHTML = "";  
  price2 = datos();
  console.log(price2);

  price2.forEach(element => {
    let htmldescarga = `
        <div class="cart-item">
          <div class="cart-info-download">
            <p>ph: ${element.user.name}</p>
            <a href="${element.links.download}?force=true" class="cart-icon">
              Descargar <i class="fas fa-arrow-down"></i>
            </a>
          </div>         
        </div>
    `;


    let containerShoppingCart = document.getElementById("my-shopping-cart");
    containerShoppingCart.innerHTML += htmldescarga;

    }
  )
}

function datos(){
  let datastorage = localStorage.getItem('datalocalStorage');
  return JSON.parse(datastorage);
}



//funcion 1 SHOPPING CART //RENAME SHOPPING CART
/*
function ShoppingCart() {
  var cart = [];

  this.populate = function() {
    cart = this.get();
  };

  this.add = function(product) {
    //AGREGAR productos
    cart.push(product);
  };

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

//funcion 2 OBJETO PRODUCT
function Product(id, title, price, description, image) {
  this.id = id;
  this.title = title;
  this.price = price;
  this.description = description;
  this.image = image;
}

//mi carrito de compras
var myShoppingCart = new ShoppingCart();
myShoppingCart.add(product1);
myShoppingCart.add(product2);
myShoppingCart.add(product3);
myShoppingCart.add(product4);

//mostrar productos usando el get
var constentmyShoppingCart = myShoppingCart.get();

//mostrar titulo de los productos en el dom

function showProducts() {
  for (var i = 0; i < constentmyShoppingCart.length; i++) {
    let tituloProductos = constentmyShoppingCart[i].title;
    function ShoppingCartDom() {
      let newLi = document.createElement("li");
      let newProduct = document.createTextNode(tituloProductos);
      newLi.appendChild(newProduct);

      let parentUl = document.getElementById("my-shopping-cart");
      let currentDiv = document.getElementById("li");
      parentUl.insertBefore(newLi, currentDiv);
    }
    ShoppingCartDom();
  }
}
showProducts();

////////////////////////////////////////////////////
//FUNCION mostrar productos en consola

function showProducts() {
  for (var i = 0; i < eshop.length; i++) {
    console.log(eshop[i]);
  }
}
showProducts();

//FUNCION seleccionar para CARRITO DE COMPRAS

function productSelection(id) {
  let productSelected = [];
  for (let i = 0; i < eshop.length; i++) {
    const product = eshop[i];
    if (product.id === id) {
      productSelected.push(product);
    }
  }
  return productSelected;
}
productSelection();
*/
/*
var constentmyShoppingCart = myShoppingCart.get();
console.log(constentmyShoppingCart);

//FUNCION mostrar productos en consola con foreach -- OK FUNCIONANDO!
const showProducts2 = () => {
  cart.forEach(product => {
    console.log(product);
  });
};

showProducts2();


function getImageHtml(i) {
  console.log(i)
  return `
    <div class="image-container">
      <img src="${i.urls.small}" alt="${i.alt_description}">
      <div class="image-info">
        <p>ph: ${i.user.name}</p>
        <button class="button add-to-cart" onclick="shoppingCart.add(${i.id})">Agregar $5</button>
      </div>
    </div>
  `;
}

*/
