// https://reqres.in/api/users


	fetch( 'https://reqres.in/api/users' )
		.then( resp => res.json())
		.then( respObj => {
			console.log(respObj);
		});
