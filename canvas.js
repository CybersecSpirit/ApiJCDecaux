var Dessin = {
	canvas : document.getElementById("signature"),
	context : document.getElementById("signature").getContext("2d"),
	dessiner: false,
  canvasVide: true,


	// Position du curseur
	cursorCoord : function(event) {

		var coord = document.getElementById("signature").getBoundingClientRect();
		var coord_X = event.layerX;
		var coord_Y = event.layerY;


		Dessin.drawing(coord_X, coord_Y);
	},

	drawing : function(coord_X, coord_Y) {
		if(Dessin.dessiner){
			this.context.lineWidth = 3;
			this.context.lineTo(coord_X, coord_Y); // Désigne le point d'arrivé du tracer
			this.context.stroke();
		}
	},

	initDrawing : function(coord_X, coord_Y) {
		Dessin.context.beginPath();
		Dessin.dessiner = true;
    Dessin.canvasVide = false;
		Dessin.drawing(coord_X, coord_Y);

	},

	stopDrawing : function() {
		this.dessiner = false;
	},

	clearDrawing : function() {
		this.context.clearRect(0, 0, 400, 200);
	},
};
