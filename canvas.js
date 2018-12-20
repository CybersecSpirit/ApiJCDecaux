var Dessin = {
	canvas : document.getElementById("signature"),
	context : document.getElementById("signature").getContext("2d"),
	dessiner: false,
  canvasVide: true,


	// Position du curseur
	cursorCoord : function(event) {
    event.preventDefault();

		

		var coord = document.getElementById("signature").getBoundingClientRect();
		var coord_X;
		var coord_Y;
    if (event.changedTouches && event.changedTouches[0]){
			var offsety = event.target.offsetTop + event.target.offsetParent.offsetParent.offsetTop + event.target.offsetParent.offsetParent.offsetParent.offsetTop || 0;
			var offsetx = event.target.offsetLeft || 0;


			coord_X = event.changedTouches[0].pageX - offsetx ;
			coord_Y = event.changedTouches[0].pageY - offsety;

    }
    else if (event.offsetX || 0 == event.offsetX) {
			coord_X = event.offsetX;
			coord_Y = event.offsetY;
		}




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
    event.preventDefault();
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
