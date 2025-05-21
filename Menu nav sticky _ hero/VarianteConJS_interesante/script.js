/////YA NO SE REQUIERE JS PARA ESTE EFECTO
/////////PERO ES UN CODIGO INTERESANTE DE TENER EN CUENTA

//<script src="index_js.js"></script>
alert("funka!");
//(funtion(){})(); funcion crousher

(function(){
	console.log("Llama la funcion verEventScroll() para ver las coordenadas de la barra de Navegacion");

	let pinged= false; //arranca falso, porque no esta pegado en el top. cambia a true si esta en el top

	//----ANCLAR CON REFERENCIA A LA BARRA------/
	let nav = document.querySelector(".menuNav");
	let mainej = document.querySelector(".mainej");
	if (!nav) return; // Evita errores si no encuentra el nav

	let coordInLive =nav.getBoundingClientRect(); //metodo saber la distancia del elemento nav con la esq inzquierda
	console.log("La variable coord(nav) es un: "); console.log(coordInLive);
	console.log("----------");

		//las escuchas del scrol se hace en windows, luego se especifica a que elemento en especifico
	window.addEventListener('scroll',function(evento){
		let coordInLive =nav.getBoundingClientRect(); //conocer en cada momento su posicion
			//console.log(coordInLive);
		if(coordInLive.top <= 0.75) stickToTop();   //coordInLive.top
		//if(coordInLive.top != 0) unStickFromTop(); //no tiene logica pq una vez es 0,no deja de valer eso
	})//window

	//----DES-ANCLAR CON REFERENCIA AL HERO(parte inferior)------/
	let imgH = document.querySelector(".LayHeroImage"); // Guardamos referencia al hero

	let heroCoords =imgH.getBoundingClientRect();
	console.log("La variable 'heroCoords'(hero) es un: ");	console.log(heroCoords);
	console.log("----------");

	window.addEventListener('scroll',function(evento){
		let heroCoords =imgH.getBoundingClientRect();
		console.log("heroCoords");console.log(heroCoords);
		if(heroCoords.bottom >0)   unStickfromTop();
				//sera 0 cuando no se vea en pantalla, luego toma valores negativos
				//cuando vuelva a ser 0.0001 es cuando comienza a verse el Hero en pantalla
	})//window

	function stickToTop(){
		//if(pinged) return;
		nav.classList.add("pined");
		mainej.classList.add("marginTop"); //evita el colapso cuando se activa 'pined'
		
		//pinged=true;
	}

	function unStickfromTop(){
		//if(pinged) return;
		nav.classList.remove("pined");
		mainej.classList.remove("marginTop");
		//pinged=true;
	}
})();


///// REFACTORIZACION DE GPT...    perro!
/*
(function() {
	let nav = document.querySelector(".menuNav");
	if (!nav) return; // Evita errores si no encuentra el nav
	// Guardamos referencia al hero
	let imgH = document.querySelector(".LayHeroImage");

	// Evento scroll
	window.addEventListener('scroll', function() {
		let navCoords = nav.getBoundingClientRect();
		let heroCoords = imgH.getBoundingClientRect();

		// Si la parte superior del nav llega a la parte superior del viewport
		if (navCoords.top <= 0) {
			nav.classList.add("pined");
		}
		// Si el hero aún está visible (parte inferior está por encima del viewport)
		if (heroCoords.bottom > 0) {
			nav.classList.remove("pined");
		}
	});
})();
*/