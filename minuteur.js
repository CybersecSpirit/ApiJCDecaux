var Minuteur = {
  compteur: function(){
    var compteurMinute = Number(document.getElementById('minuteCompteur').textContent);
    var compteurSeconde = Number(document.getElementById('secondeCompteur').textContent);
    compteurSeconde--;
    if (compteurSeconde < 10 && compteurSeconde > -1){
      compteurSeconde = String("0" + compteurSeconde);
      }
    if (compteurSeconde == -1) {
      compteurSeconde = 59;
      compteurMinute--;
      }
    if (compteurSeconde == 0 && compteurMinute == 0){
      clearInterval(timer);
      $('#content_info_reservation').html("<p>Réservation annulée.</p>");
    }
    $('#minuteCompteur').text(compteurMinute);
    $('#secondeCompteur').text(compteurSeconde);
    sessionStorage.etatReservation = $('#info_reservation').html();
  }
};



var timer = setInterval(function(){Minuteur.compteur();},1000);
