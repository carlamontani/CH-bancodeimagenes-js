//mostrar productos
//FUNCION CONSTRUCTORA

function ImageGallery() {

  //RECIBE DATA **
  this.data = [];


  //RECIBE RESULTADOS DE BUSQUEDA ----FALTA HACER BUSCADOR

  //ALMACENA DATA **
  this.init = function(data) {
    this.data = data;
    console.log(data)
  };

  // FUNCION GET BY ID PARA BUSQUEDA -- RETORNA SOLO ELEMENTOS DE LA BUSQUEDA Y LOS JUNTA CON DATA. QUEDA DATA = PRODUCTS SI NO HAGO BUSQUEDA -- AGREGAR DESPUES

  //PARTE HTML P LLENAR CON DATA **
  this.buildGallery = function(data) {
    return `
    <div id="image-container">
      <img src=${data.img} alt="img" />
      <p>${data.title}</p>
      <div>
        <p>$${data.price}</p>
        <button class="button add-to-cart" onclick="addToCart(${data.id})">Agregar al Carrito</button>
      </div>
    </div>
    `;
  };


  //DONDE SE VA  A UBICAR LA PARTE DEL HTML QUE CREE ANTES - GET BY ID **
  this.buildHtml = function(containerId, sourceData) {

    //1-getelementbyid
    var container = document.getElementById(containerId);
    container.innerHTML = "";

    //2.variable html vacia para llenar con el foreach
    var html = '';

    //3.ELFOREACH recive sourcedata y pasa por c/u de los productos
    this[sourceData].forEach(product => {
      html = html + this.buildGallery(product);
    });

    container.innerHTML = html;
  };
}

///////////////////////// PASAR A APP **************