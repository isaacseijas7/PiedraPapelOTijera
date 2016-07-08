(function (window,document) {
	'use strict';

	var rdos = null,
		rdoSeleccionado = null,
		jugador_h = null,
		maquina_h = null,
		jugador_puntos = 0,
		maquina_puntos = 0,
		jugador_pts = null,
		maquina_pts = null,
		ppt = {

			getRadios: function(clase) {
				rdos = document.querySelectorAll('.'+clase);
				jugador_h = document.querySelector('#op_jugador');
				maquina_h = document.querySelector('#op_maquina');
				jugador_pts = document.querySelector('#pts_jugador');
				maquina_pts = document.querySelector('#pts_maqina');
				return this;
			},

			agregarEventos: function () {
				self = this;
				for (var i = rdos.length - 1; i >= 0; i--) {
					rdos[i].addEventListener('click', function (e) {
						rdoSeleccionado = e.target.value;
						self.opcionMaquina();
						var op = self.getOpcion(parseInt(rdoSeleccionado, 10));
						document.querySelector('#op_jugador').innerHTML= '<img src="img/'+op+'.png" alt=""><br><p>'+op+'</p>';
					},false);
				};
				return this;
			},

			opcionMaquina: function  () {
				var randonM = Math.floor(Math.random()*(3-1+1))+1;
				var op = this.getOpcion(randonM);
				document.querySelector('#op_maquina').innerHTML= '<img src="img/'+op+'.png" alt=""><br><p>'+op+'</p>';
				this.optenerGanador(rdoSeleccionado,randonM);
			},

			getOpcion: function (op) {
				switch (op) {
					case 1:
						return 'Piedra'
						break;
					case 2:
						return 'Papel'
						break;
					case 3:
						return 'Tijera'
						break;
					default:
						return 'undefined';
						break;
				}
			},

			optenerGanador: function (opJ,opM) {
				if (opJ == opM) {
					document.querySelector("#resultado_ganador").innerHTML = '<p>EMPATE</p>';
					jugador_h.style.color = "blue";
					maquina_h.style.color = "blue";
				} else if (opJ==1 && opM==2) {
					document.querySelector("#resultado_ganador").innerHTML = '<p>PAPEL ENVUELVE PIEDRA </p>';
					maquina_puntos = maquina_puntos+1;
					jugador_h.style.color = "red";
					maquina_h.style.color = "blue";
				} else if (opJ==2 && opM==1) {
					document.querySelector("#resultado_ganador").innerHTML = '<p>PAPEL ENVUELVE PIEDRA </p>';
					jugador_puntos = jugador_puntos+1;
					jugador_h.style.color = "blue";
					maquina_h.style.color = "red";
				}else if (opJ==1 && opM==3) {
					document.querySelector("#resultado_ganador").innerHTML = '<p>PIEDRA ROMPE TIJERA</p>';
					jugador_puntos = jugador_puntos+1;
					jugador_h.style.color = "blue";
					maquina_h.style.color = "red";
				} else if (opJ==3 && opM==1) {
					document.querySelector("#resultado_ganador").innerHTML = '<p>PIEDRA ROMPE TIJERA</p>';
					maquina_puntos = maquina_puntos+1;
					jugador_h.style.color = "red";
					maquina_h.style.color = "blue";
				}else if (opJ==2 && opM==3) {
					document.querySelector("#resultado_ganador").innerHTML = '<p>TIJERA CORTA PAPEL</p>';
					maquina_puntos = maquina_puntos+1;
					jugador_h.style.color = "red";
					maquina_h.style.color = "blue";
				} else if (opJ==3 && opM==2) {
					document.querySelector("#resultado_ganador").innerHTML = '<p>TIJERA CORTA PAPEL</p>';
					jugador_h.style.color = "blue";
					jugador_puntos = jugador_puntos+1;
					maquina_h.style.color = "red";
				}

				jugador_pts.innerHTML = jugador_puntos;

				maquina_pts.innerHTML = maquina_puntos;

				if (jugador_puntos==3) {
					document.querySelector('#conten_juego').innerHTML = '<p class="resultado_ganador">Felicidades has ganado =)</p><br><a href="">JUGAR DE NUEVO</a>';
				} else if (maquina_puntos==3) {
					document.querySelector('#conten_juego').innerHTML = '<p class="resultado_ganador">Lo sentimos has perdido :(</p><br><a href="">JUGAR DE NUEVO</a>';
				}
			}
		}

	if (typeof window.ppt==='undefined') {
		window.ppt = ppt;
	} else{
		console.log('linreria ya cargada')
	};


})(window,document);