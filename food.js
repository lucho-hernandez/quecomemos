(function() {
  var quotes;
  fetch("https://cors-anywhere.herokuapp.com/http://gsx2json.com/api?id=1FItBw1ljvC1K09yK-Tmu5_hV0g7hI_XKCBN_ve5m3Sg&sheet=1&columns=false")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    populateData(myJson.rows)
    document.getElementById("loader").style.display = "none";;
  });
  
var populateData = function(data) {

  var randomQuoteIndex = Math.floor(Math.random() * data.length);

  var randomQuote = data[randomQuoteIndex];

  var foodElement = document.getElementById("food");
  var imageElement = document.getElementById("image-food");
  var buttonElement = document.getElementById("search-button")
  var buttonOrder = document.getElementById("order-button")

  foodElement.innerText = randomQuote.text;
  imageElement.src = randomQuote.img;
  buttonElement.href = "https://www.google.com/search?q=Receta+de+"+randomQuote.text;
  buttonOrder.href = "https://www.pedidosya.com.ar/restaurantes/cordoba?&v="+randomQuote.text;
  
        imageElement.onload = function() {
        document.getElementById("loader").style.display = "none";
    }
  }
  
})();
