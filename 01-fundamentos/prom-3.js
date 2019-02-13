
	function retornaTrue() {
		return false;
	}

	function sumarLento( numero ){
		return new Promise( function( resolve, reject) {

				setTimeout( function() {

					resolve(numero + 1);
				}, 800);
		});
	}


		let sumarRapido = ( numero ) => {
			return new Promise( (resolve, reject) => {
				setTimeout( () => resolve(numero + 1), 300);
			});
		}


		let cosas = [sumarLento(5),sumarRapido(10),'hola mundo', true, retornaTrue()];

		Promise.all( cosas )
						.then( respuesta => {
							console.log(respuesta);
						}).catch( error  => {
							console.log(error);
						});


	//	sumarLento(5).then( console.log );
	//		sumarRapido(10).then( console.log );