var Storage = {
	nom : null,
	prenom : null,
	dataURL : null,
	station : null,
  etatReservation: null,

	saveForm : function() {
    if (Dessin.canvasVide == true){
      alert("Signez SVP !");
    } else {
		    this.nom = document.getElementById("nom").value;
		    this.prenom = document.getElementById("prenom").value;
		    this.dataURL = Dessin.canvas.toDataURL();
		    this.station = document.getElementById("name").textContent;

        $velo = Number($('#available_bikes').text());
        $velo--;
        $('#available_bikes').text($velo);

		    localStorage.nom = this.nom;
		    localStorage.prenom = this.prenom;
		    sessionStorage.signature = this.dataURL;
		    sessionStorage.station = this.station;

		    document.getElementById("info_reservation").innerHTML = 'Vélo réservé à la station '+ sessionStorage.station + ' au nom de ' + localStorage.prenom + ' ' + localStorage.nom + '.<br /> <p>Votre réservation prendra fin dans <span id="minuteCompteur">20</span>:<span id="secondeCompteur">00</span> minutes.</p>';
        $("#content_info_reservation").slideDown("slow");
      }
	},

	openLocalStorage : function() {
		if(localStorage.nom){
			$("#nom").val(localStorage.nom);
			$("#prenom").val(localStorage.prenom);
		}
    if(sessionStorage.station){
      $('#info_reservation').html(sessionStorage.etatReservation);
      $("#content_info_reservation").slideDown("slow");
    }
	}
};


$(document).ready(Storage.openLocalStorage());
