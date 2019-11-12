var apiKey = "&APPID=2401b6ee83614d604c72516b9ca97dde";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";

$("#enterCity").on("click", function(event) {
	event.preventDefault();

	var city = $("#cityInput").val().trim();
	queryURL = queryURL + city + apiKey; 

  $.ajax({
	url: queryURL,
	method: "GET"
  }).then(function(response) {
	  console.log(response);
	  var  strTemp = JSON.stringify(response.main.temp);
	  var  strHumd= JSON.stringify(response.main.humidity);
	  var  strWind= JSON.stringify(response.wind.speed);
	  //var strIndx = response.uv.index;

	$("#locCont").append("City: " + city);
	$("#temCont").append("Temperature: " + strTemp);
	$("#humCont").append("Humidity: " + strHumd);
	$("#winCont").append("Wind Speed " + strWind);
	//$("#indCont").append("UV Index " + strIndx);




  });

  
});
