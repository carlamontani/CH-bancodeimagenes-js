let item = [];
let price = [];
let sumaPrecio = [];

function ShoppingCart(){

  this.productSelected = [];

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

    for (let i = 0; i < productosprueba.length; i++) {  
      if(productosprueba[i].id == id){
        productosprueba.splice(i, 1);
        break;
      }
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
  }

  this.recalcularCarrito = () => {  
    if (price === undefined || price.length == 0) {
      localStorage.clear();
      let containertotal = document.querySelector('#total');
      containertotal.innerHTML = price;
    } else {
      let reducesumaPrecio = (accumulator, currentValue) => accumulator + currentValue;
      sumaPrecio = price.reduce(reducesumaPrecio);

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