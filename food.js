(function() {
  var quotes;
  fetch(
    "https://opensheet.vercel.app/1FItBw1ljvC1K09yK-Tmu5_hV0g7hI_XKCBN_ve5m3Sg/Food"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      populateData(myJson);
    });

  var populateData = function(data) {
    var randomQuoteIndex = Math.floor(Math.random() * data.length);

    var randomQuote = data[randomQuoteIndex];

    var foodElement = document.getElementById("food");
    var foodElementMobile = document.getElementById("food-mobile");
    var imageElement = document.getElementById("image-food");
    var imageElementMobile = document.getElementById("image-mobile");
    var buttonElement = document.getElementById("search-button");
    var buttonElementMobile = document.getElementById("search-button-mobile");
    var buttonOrder = document.getElementById("order-button");
    var buttonOrderMobile = document.getElementById("order-button-mobile");

    foodElement.innerText = randomQuote.text;
    foodElementMobile.innerText = randomQuote.text;
    imageElement.src = randomQuote.img;
    imageElementMobile.src = randomQuote.img;

    buttonElement.href =
      "https://www.google.com/search?q=Receta+de+" + randomQuote.text;
    buttonElementMobile.href =
      "https://www.google.com/search?q=Receta+de+" + randomQuote.text;
    buttonOrder.href =
      "https://www.pedidosya.com.ar/restaurantes/cordoba?&v=" +
      randomQuote.text;
    buttonOrderMobile.href =
      "https://www.pedidosya.com.ar/restaurantes/cordoba?&v=" +
      randomQuote.text;

    imageElement.onload = function() {
      document.getElementById("loader").style.display = "none";
    };
  };
})();
