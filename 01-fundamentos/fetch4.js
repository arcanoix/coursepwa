
let image = document.querySelector('img');




fetch( 'img/superman.png' )
	.then( res => res.blob() )

	.then( imagen => {
			//console.log(imagen); 

			var imgPath = URL.createObjectURL( imagen );

			image.src = imgPath;
	});