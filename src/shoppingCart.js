//var productSelected = [];  ---lo desactive
let itemhtml = []; 
let item = [];
let price = [];
let sumaPrecio = [];

function ShoppingCart(){

  this.productSelected = [];

  // this.start() = function() {
  //   //Inicializar carrito guardado.
  // }

  this.clear = function() {
    productSelected = [];
    price = [];
    itemhtml = [];
    document.getElementById("my-shopping-cart").innerHTML = "";   
    document.querySelector('#total').innerHTML = 0;
  }

  this.clearOne = function(id) {    
    console.log(id);

    let removeitemparent = document.getElementById("my-shopping-cart");
    let removeitem = document.querySelector(`#cart-item${id}`);
    let removefunction = Removefunction();
    function Removefunction() {
      removeitemparent.removeChild(removeitem);
    } 

    //itemhtml = itemhtml - removefunction;

    productosprueba = this.productSelected; //

    for (let i = 0; i < productosprueba.length; i++) {  /////FUNCION BORRAR

      //let precioactual = productosprueba[i].price;


      if(productosprueba[i].id == id){
        //console.log(sumaPrecio - precioactual);
        //sumaPrecio = sumaPrecio - precioactual;
        //let containerresta = document.querySelector('#total');
        //containerresta.innerHTML = sumaPrecio;
        productosprueba.splice(i, 1);
        break;
      }
      //console.log(this.productSelected);
    }

    productosprueba = [];

    productSelected = [];

  }

  this.add = function(id) {
    data.forEach(i => {
      if (i.id == id) {
        this.productSelected.push(i);
        var cartString = JSON.stringify(this.productSelected);
        localStorage.setItem('data', cartString)
        this.buildHtml();
        this.recalcularCarrito(i);
      }
    })
  }

  this.buildHtml = () => {

    let productslist = this.productSelected;

    function buildItem(i) {
      return `
        <div id="cart-item${i.id}" class="cart-item">
          <p>IMG${i.id} $${i.price}</p>
          <a href="#">
            <i class="far fa-window-close" id="icon${i.id}" onclick="shoppingCart.clearOne(${i.id})"></i>
          </a>
        </div>
      `;
    }
    let containerShoppingCart = document.getElementById("my-shopping-cart");
    containerShoppingCart.innerHTML = `
      ${productslist.map(buildItem).join(" ")}
      `;
    
    
    //var containerinfo =  buildItem();

    //console.log(containerinfo)
    //containerShoppingCart.innerHTML = containerinfo ; 

    //itemhtml = itemhtml + containerinfo;
    //containerShoppingCart.innerHTML = itemhtml;   
  }

  this.recalcularCarrito = (item) => {
    price.push(item.price);

    let reducesumaPrecio = (accumulator, currentValue) => accumulator + currentValue;
    sumaPrecio = price.reduce(reducesumaPrecio);

    let containertotal = document.querySelector('#total');
    containertotal.innerHTML = sumaPrecio;
  }

  this.populate = function() {
    this.productSelected = this.get();
  }

  this.get = function() {
    let datastorage = localStorage.getItem('data');
    return JSON.parse(datastorage);
  }

}






























/////////////////////////////////////////////////////////////////
//prubas para price



  //////////////////////////////////////////////////////////////////////


  //LA VERDADERA FUNCION DEL PRECIO toma todos los precio $$$$
  /* 



            <div id="cart-item${i.id}" class="cart-item">
            <p>IMG${i.id} $${i.price}</p>
            <a href="#">
              <i class="far fa-window-close" id="icon${i.id}" onclick="shoppingCart.clearOne(${i.id})"></i>
            </a>
          </div>

  let productosprueba = this.productSelected[i];


    console.log(productosprueba);
    
    
    productosprueba.forEach(element => {
      if (element[i].id == id) {
        console.log(element);
        console.log(productosprueba)
        console.log(indexOf(element));
        //let index = followersArray.map(i => i.id).indexOf(follower.id);
        
        //var removed = productosprueba.splice(id, 2);
      }
    });

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
