let item = [];
let price = [];
let sumaPrecio = [];

function ShoppingCart(){

  this.productSelected = [];

  // this.start() = function() {
  //   //Inicializar carrito guardado.
  // }

  this.clear = function() {

    
    console.log(this.productSelected);
    console.log(price);
    
    this.productSelected = [];
    price = [];
    localStorage.clear();
    document.getElementById("my-shopping-cart").innerHTML = "";   
    document.querySelector('#total').innerHTML = 0;
    
  }

  this.clearOne = function(id) {    

    let removeitemparent = document.getElementById("my-shopping-cart");
    let removeitem = document.querySelector(`#cart-item${id}`);

    function Removefunction() {
      removeitemparent.removeChild(removeitem);
    } 
    Removefunction();

    price.pop()

    this.recalcularCarrito();



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
    
    var cartString = JSON.stringify(this.productSelected);///// ver!!!!
    localStorage.setItem('datalocalStorage', cartString)

    var cartPrice = JSON.stringify(price);///// ver!!!!
    localStorage.setItem('pricelocalStorage', cartPrice)

  }

  this.add = function(id) {
    console.log(products)
    let imagesDisplay = products.get();
    console.log(imagesDisplay)
    imagesDisplay.forEach(i => {
      if (i.id == id) {
        (this.productSelected).push(i);
        var cartString = JSON.stringify(this.productSelected);///// ver!!!!
        localStorage.setItem('datalocalStorage', cartString)
        this.buildHtml();
        price.push(5);
        var cartPrice = JSON.stringify(price);///// ver!!!!
        localStorage.setItem('pricelocalStorage', cartPrice)
        this.recalcularCarrito();
      }
    })
  }

  this.buildHtml = () => {

    let productslist = this.productSelected;

    function buildItem(i) {
      return `
        <div id="cart-item${i.id}" class="cart-item">
          <div class="img-small">
            <img style="height: inherit;" src="${i.urls.thumb}" alt="${i.alt_description}"/>
          </div> 
          <div class="cart-info">
            <a href="#" class="cart-icon">
              <i class="fas fa-times" id="icon${i.id}" onclick="shoppingCart.clearOne('${i.id}')"></i>
            </a>
            <p class="p-cart">ph: ${i.user.name}</p><span><p class="p-price"> $5</p>
          </div>         
        </div>
      `;
    }

    console.log(buildItem)
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

  this.recalcularCarrito = () => {  
    if (price === undefined || price.length == 0) {
      localStorage.clear();
      let containertotal = document.querySelector('#total');
      containertotal.innerHTML = price;
      console.log("prueba")
    } else {
      let reducesumaPrecio = (accumulator, currentValue) => accumulator + currentValue;
      sumaPrecio = price.reduce(reducesumaPrecio);
      console.log(sumaPrecio);

      let containertotal = document.querySelector('#total');
      containertotal.innerHTML = sumaPrecio;

      let pricedatastorage = localStorage.getItem('pricelocalStorage');
      return JSON.parse(pricedatastorage);
    }
  }

  this.populate = function() {
    if (localStorage.getItem('datalocalStorage') === null) {
      this.productSelected = [];
    } else{
      this.productSelected = this.get();
      price = this.getPrice();
      this.recalcularCarrito();
    }
  }

  this.get = function() {
    let datastorage = localStorage.getItem('datalocalStorage');
    return JSON.parse(datastorage);
  }

  this.getPrice = function() {
    let pricedatastorage = localStorage.getItem('pricelocalStorage');
    return JSON.parse(pricedatastorage);  
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
