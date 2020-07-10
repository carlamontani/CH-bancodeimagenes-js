//mostrar productos
//FUNCION CONSTRUCTORA

function ImageGallery() {

  //RECIBE DATA **
  this.data = [];


  //RECIBE RESULTADOS DE BUSQUEDA ----FALTA HACER BUSCADOR

  //ALMACENA DATA **
  this.init = function(data) {
    this.data = data;
  };

  // FUNCION GET BY ID PARA BUSQUEDA -- RETORNA SOLO ELEMENTOS DE LA BUSQUEDA Y LOS JUNTA CON DATA. QUEDA DATA = PRODUCTS SI NO HAGO BUSQUEDA -- AGREGAR DESPUES

  //PARTE HTML P LLENAR CON DATA **
  this.buildGallery = function(data) {
    return `
    <div id="image-container">
      <img src=${data.img} alt="img" />
      <div id="image-info">
        <p>${data.title}</p>
        <button class="button add-to-cart" onclick="shoppingCart.add(${data.id})">Agregar $${data.price}</button>
      </div>
    </div>
    `;
  };


  //DONDE SE VA  A UBICAR LA PARTE DEL HTML QUE CREE ANTES - GET BY ID **
  this.buildHtml = function(containerId, sourceData) {

    //1-getelementbyid
    let container = document.getElementById(containerId);
    container.innerHTML = "";

    //2.variable html vacia para llenar con el foreach
    let html = '';

    //3.ELFOREACH reciBe sourcedata y pasa por c/u de los productos
    this[sourceData].forEach(product => {
      html = html + this.buildGallery(product);
    });

    container.innerHTML = html;
  };
}