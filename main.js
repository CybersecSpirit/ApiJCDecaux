var Stations = {
	name: null,
	address: null,
	position : null,
	bike_stands : null,
	available_bikes : null,
	available_bike_stands : null,
  status : null,

	// Intégration des données de la station
	remplirStation : function(donneesStation) {
    if (donneesStation.name == sessionStorage.station){
      this.available_bikes = donneesStation.available_bikes - 1;
    } else {
      this.available_bikes = donneesStation.available_bikes;
    }
		this.name = donneesStation.name;
		this.address = donneesStation.address;
		this.position = donneesStation.position;
		this.bike_stands = donneesStation.bike_stands;
		this.available_bike_stands = donneesStation.available_bike_stands;
    this.status = donneesStation.status;
	},

	insertionDonneesStation : function() {
        // Insertion des données dans la page
    document.getElementById("name").innerHTML = this.name;
		document.getElementById("address").innerHTML = this.address;
    if (this.status == "OPEN"){
      document.getElementById("available_bikes").innerHTML = this.available_bikes;
    } else {
      document.getElementById("available_bikes").innerHTML = "FERMÉ";
    }

		document.getElementById("available_bike_stands").innerHTML = this.available_bike_stands;

	},


}; // Fin objet Stations


// Map
var MyMap = {
	map: null,

	// Initialisation de la google map
	initMap: function(){
		var coord = {lat: 43.29, lng: 5.38};
		map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: coord});
	},//fin InitMap

	// Initialisation des stations
	initStations : function(urlAjax){

		// Requête ajax pour récupérer donnée JCDECAUX
		ajaxGet(urlAjax, function(reponse){

			var stations = JSON.parse(reponse);
			stations.forEach(function(infoStation) {

				if(infoStation.available_bikes >= 1 && infoStation.status == "OPEN" && infoStation.name != sessionStorage.station){
					url = "images/marker-green.png";
				}
				else if(infoStation.available_bikes == 0 && infoStation.status == "OPEN"){
					url = "images/marker-red.png";
				}
				else if(infoStation.status == "CLOSED"){
					url = "images/marker-orange.png";
				} else if (infoStation.name == sessionStorage.station){
          url ="images/marker-blue.png";
        }

				var icon = {
					url: url,
					scaledSize: new google.maps.Size(50, 50),
					origin: new google.maps.Point(0,0),
					anchor: new google.maps.Point(0, 0)
				};


				// Création des markers sur la map
				var marker = new google.maps.Marker({
					map: map,
					position: infoStation.position,
					icon: icon
				});

				// On crée les stations et au clique on met les infos dans la div
				marker.addListener('click', function() {
					Stations.remplirStation(infoStation);
					Stations.insertionDonneesStation();

					$("#reservation").animate({right: "0"}, "fast");

				});
			});
		});
	}
};

$(document).ready(MyMap.initStations("https://api.jcdecaux.com/vls/v1/stations?contract=Marseille&apiKey=55a369c543bf073a953c742dd43af857265b8e75"));
