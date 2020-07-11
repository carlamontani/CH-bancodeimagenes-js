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
        searchProducts($('input[name= "search"]').val());
      }
    });
  
    function getCardHtml(product) {
      return `
        <p>id ${product.id}</p>
        <img src="${product.urls.thumb}" alt="">
      `;
    }
  
    function renderProducts(products) {
      $("#productsContainer").empty();
      products.forEach(product => {
        var htmlTemplate = getCardHtml(product);
        $("#productsContainer").append(htmlTemplate);
      });
    }
  
    function searchProducts(key) {
      //console.log(key);
      var url = `https://api.unsplash.com/search/photos?page=3&query=${key}&client_id=EKBNZeJV2o9Yl5CtCgcjiSv8dLPXoaoqFRFyTBgK-ww`;
  
      $.ajax({
        method: "GET",
        url: url
      })
        .done(function(data) {
          console.log(data.results);
          renderProducts(data.results);
        })
        .fail(function(error) {
          console.log(error);
        });
    }
  });