$(document).ready(() => {
    $("form[name='step1'] ").validate({
      rules: {
        search: {
          required: true,
          minlength: 3
        }
      },
      messages: {
        search: {
          required: "Completá este campo con tu búsqueda",
          minlength: "Escribí más de 3 letras para hacer la búsqueda"
        }
      },
      submitHandler: function(form) {
        searchProducts($('input[name= "search"]').val(),1);
      }
    });

  });


  function imageError(){
    return `
          <div class="image-card-error">
              <div class="image-container">
                <img src="https://media.giphy.com/media/OADnCQDNf0WHu/giphy.gif" alt="meme-error"/>
              </div>
              <p>Error! <span>No encontramos resultados para tu búsqueda,<br> probá buscar otra palabra</p>
          </div>
          `;
  }

  function renderError() {
    $("#image-gallery").empty();
    var htmlError = imageError();
    $("#image-gallery").append(htmlError);
  }

  function searchProducts(key,page) { 
    products = new ImageGallery();
    console.log(key);
    console.log(page);
    var url = `https://api.unsplash.com/search/photos?page=${page}&query=${key}&per_page=12&client_id=EKBNZeJV2o9Yl5CtCgcjiSv8dLPXoaoqFRFyTBgK-ww`;

    $.ajax({
      method: "GET",
      url: url
    })
      .done(function(data) {
        if (data.results === undefined || data.results.length == 0) {
          renderError();
        } else {
          console.log(data.results);
          console.log(data)

          products.init(data.results);

          products.buildHtml('image-gallery', 'data');
          console.log(key);
          renderProducts(key, page);
        }
      })

      .fail(function() {
        alert( "error" );
      })
}

function renderProducts(key, page) {    
    $("#nextpage").remove();
    var htmlTemplate2 = pages(key, page);
    $("#image-gallery-next").append(htmlTemplate2);  
}

function pages(key, page){
  return `
    <div id="nextpage">
      <ul class="ul">
        <li onclick="searchProducts('${key}', ${page}+1)">ver +</li>
      </ul>
    </div>
  `
}