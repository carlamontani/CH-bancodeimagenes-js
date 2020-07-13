//mostrar productos
//FUNCION CONSTRUCTORA

function ImageGallery() {

  //RECIBE DATA **
  this.data = [];

  this.get = function () {
    return this.data;
  }

  //RECIBE RESULTADOS DE BUSQUEDA ----FALTA HACER BUSCADOR

  //ALMACENA DATA **
  this.init = function(data) {
    this.data = data;
  };

  // FUNCION GET BY ID PARA BUSQUEDA -- RETORNA SOLO ELEMENTOS DE LA BUSQUEDA Y LOS JUNTA CON DATA. QUEDA DATA = PRODUCTS SI NO HAGO BUSQUEDA -- AGREGAR DESPUES

  //PARTE HTML P LLENAR CON DATA **
  this.buildGallery = function(data) {
    //console.log(data)
    return `
    <div class="image-card">
      <div class="image-container">
        <img src="${data.urls.small}" alt="${data.alt_description}"/>
      </div>
      <div class="image-info">
        <p>${data.id}<br>
        ph: ${data.user.name}</p>
        <button class="button add-to-cart" onclick="shoppingCart.add('${data.id}')">Agregar $5</button>
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