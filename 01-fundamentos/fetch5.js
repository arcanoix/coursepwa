



fetch('https://reqres.in/api/users/10000')

.then( resp => {
	

	if(resp.ok){
		resp.json().then( usuario => {
		console.log(usuario)
		});
	}else{
		console.log('Usuario 10000 no existe');
		throw new Error('No existe el usuario 10000')
	}


})

.cath( error => {
		console.log(error);
});