$("#enterCity").on("click", function(event) {
	event.preventDefault();
	var city = $("#cityInput").val().trim();
	console.log("The city you entered: " + city);
  });

  //API key: 2401b6ee83614d604c72516b9ca97dde
  //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2401b6ee83614d604c72516b9ca97dde 
  $.ajax({
	url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2401b6ee83614d604c72516b9ca97dde",
	method: "GET"
  }).then(function(response) {
	console.log(response);
  });
