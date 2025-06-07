/////YA NO SE REQUIERE JS PARA ESTE EFECTO
/////////PERO ES UN CODIGO INTERESANTE DE TENER EN CUENTA

//<script src="index_js.js"></script>
alert("funka!")

//(funtion(){})(); funcion crousher

/*
(function(){
	console.log("Llama la funcion verEventScroll() para ver las coordenadas de la barra de Navegacion");

	let pinged= false; //arranca falso, porque no esta pegado en el top. cambia a true si esta en el top

	//----ANCLAR CON REFERENCIA A LA BARRA------/
	let nav = document.querySelector(".menuNav");
	let coord =nav.getBoundingClientRect(); //metodo saber la distancia del elemento nav con la esq inzquierda
	console.log("La variable coord(nav) es un: "); console.log(coord);
	console.log("----------");

		//las escuchas del scrol se hace en windows, luego se especifica a que elemento en especifico
	window.addEventListener('scroll',function(evento){
		let coordInLive =nav.getBoundingClientRect(); //conocer en cada momento su posicion
			//console.log(coordInLive);
		if(coordInLive.top <=0.75) stickToTop();   //coordInLive.top
		//if(coordInLive.top != 0) unStickFromTop(); //no tiene logica pq una vez es 0,no deja de valer eso
	})//window

	function stickToTop(){
		//if(pinged) return;
		nav.classList.add("pined");
		//pinged=true;
	}

	//----DES-ANCLAR CON REFERENCIA AL HERO(parte inferior)------/

	let imgH = document.querySelector(".LayHeroImage");
	let coordimg =imgH.getBoundingClientRect();
	console.log("La variable 'coordimg'(hero) es un: ");	console.log(coordimg);
	console.log("----------");

	window.addEventListener('scroll',function(evento){
		let coordInLive =imgH.getBoundingClientRect();
		console.log("coordInLive");console.log(coordInLive);
		if(coordInLive.bottom >0) unStickfromTop();
				//sera 0 cuando no se vea en pantalla, luego toma valores negativos
				//cuando vuelva a ser 0.0001 es cuando comienza a verse el Hero en pantalla
	})//window


	function unStickfromTop(){
		//if(pinged) return;
		nav.classList.remove("pined");
		//pinged=true;
	}
})();

function verEventScroll(){
	//llamar desde consola para ver
	let nav = document.querySelector(".menuNav");
	window.addEventListener('scroll',function(evento){
		let coordInLive =nav.getBoundingClientRect();
		console.log(coordInLive);
	})//window
}
*/