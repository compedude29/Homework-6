var apiKey = "&APPID=2401b6ee83614d604c72516b9ca97dde";


$("#enterCity").on("click", function(event) {
	event.preventDefault();
	var queryURL = "";
	var city = $("#cityInput").val().trim();

	queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey; 

  $.ajax({
	url: queryURL,
	method: "GET"
  }).then(function(response) {
	  //console.log(response);

	  var  strTemp = JSON.stringify(response.main.temp);
	  var numTemp = parseFloat(strTemp);
	  numTemp = numTemp - 273.15;
	  numTemp = numTemp * (9/5);
	  numTemp = numTemp + 32;
	  numTemp = Number(numTemp.toFixed(1));

	  var  strHumd= JSON.stringify(response.main.humidity);
	  var  strWind= JSON.stringify(response.wind.speed);
	  //var strIndx = response.uv.index;

	
	$("#locCont").append("City: " + city);
	$("#temCont").append("Temperature: " + numTemp + " F");
	$("#humCont").append("Humidity: " + strHumd + "%");
	$("#winCont").append("Wind Speed " + strWind + " MPH");
	//$("#indCont").append("UV Index " + strIndx);

	cityButton();
	
  });

  function cityButton(){
	var newBttn = $("<button>");
	newBttn.text(city);
	$("#bttnContainer").append(newBttn);
  }
});

