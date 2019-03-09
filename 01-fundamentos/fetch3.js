

// POST FETCH
// 
let usuario = {
	nombre : "gustavo",
	edad : 34
};



fetch( 'https://reqres.in/api/users', {
		method: 'POST',
		body: JSON.stringify( usuario ),
		headers : {
			'Content-Type': 'application/json'
		}

})

	.then( res => res.json() )
	.then( console.log )
	.catch( console.error );