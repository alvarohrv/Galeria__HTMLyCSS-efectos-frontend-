
//<script src="index_js.js"></script>
//alert("funka!")
	let toggle1 = document.querySelector(".toogleMenu") /* Area de escucha */
	console.log(toggle1)
	toggle1.addEventListener("click", abrirMenu)

	function abrirMenu(){
		mainContainer = document.querySelector(".mainContainer")
		mainContainer.classList.toggle("openMenu")
		//alert("funka")
	}


// (funtion(){

// })();

