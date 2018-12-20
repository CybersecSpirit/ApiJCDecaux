var diapoObj = {

  indiceDiapo: 0,
  pause: 0,
  photoSlider:['images/jcd01.png','images/jcd02.jpg','images/jcd03.jpeg','images/jcd04.jpeg','images/jcd05.jpeg'],
  titreSlider:["Bienvenue","Réservez","Signez","Attention","Projet"],
  presentationSlider:["Bienvenue sur le site de réservation de vélo à Marseille.","Choisissez votre station, remplissez vos coordonnées, et c'est parti!","Signez pour valider votre réservation.","Au bout de 20 minutes, la réservation sera annulé.","Attention, ce site est réalisé dans le cadre de la formation Développeur Web Junior d'OpenClassrooms, vous ne pourrez pas vraiment réserver de vélo."],

  diaporama: function(i){

      $('#photo').attr('src',diapoObj.photoSlider[i]);
      $('#titre').text(diapoObj.titreSlider[i]);
      $('#presentation').text(diapoObj.presentationSlider[i]);

  },

  flecheDroite: function(){
    diapoObj.indiceDiapo++;
    if (diapoObj.indiceDiapo > 4){
      diapoObj.indiceDiapo = 0;
    }
    diapoObj.diaporama(diapoObj.indiceDiapo);
  },

  flecheGauche: function(){
    diapoObj.indiceDiapo--;
    if (diapoObj.indiceDiapo < 0){
      diapoObj.indiceDiapo = 4;
    }
    diapoObj.diaporama(diapoObj.indiceDiapo);
  },

  clavier: function() {
		document.addEventListener("keydown", function(e) {

			// Si on clique sur la fleche de gauche, on va au slide precedent
			if(e.which === 37){
				diapoObj.flecheGauche();
			}
			// Si on clique sur la fleche de droite, on va au slide suivant
			else if(e.which === 39){
				diapoObj.flecheDroite();
			}
		});
	},

  pauseDiapo: function(){
    clearInterval(diapoAuto);
  }

};

var diapoAuto = window.setInterval(function(){diapoObj.flecheDroite();},5000);
diapoObj.clavier();
