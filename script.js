var city = "";
var queryURL = buildQueryURL();

function buildQueryURL(){

}

//var city = "las%20vegas%2Cus";

$("#search-button").click(function(){
	var searchCity = $("#search-city").val();
	
	for(var i = 0;  i < searchCity.length; i++){
		if(searchCity[i] === " "){
			city = searchCity.slice(0,i) + "%20" + searchCity.slice(i+1, searchCity.length);
			alert(city);
		}
	};

	
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": queryURL,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "a8db0d538emsh74994a65c2b73a2p1fa07cjsn16ce2a6581eb"
	}
}

/*$.ajax(settings).done(function (response) {
	console.log(response);
	var info = $("<p>").text(JSON.stringify(response.coord));
	$("#box").append(info);
});*/



