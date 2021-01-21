let usuarios = ['Angel', 'Pepe', 'Juan']

//METODO FOR(recorrer)
//Mandar saludo a cada nombre
for(let i = 0; i < usuarios.length; i++) {
    console.log(`Hola ${usuarios[i]}`)
}

//Metodo FOR OF
for(usuario of usuarios) {
    console.log(`Hola ${usuario}`)
}

//Metodo FOREACH

//callback es una funcion que se ejecuta dentro de una funcion

//lo que hace forEach es que me devulve mediante un callback todos los datos de mi array
//Esta forma es para recibir el dato

usuarios.forEach(dato => console.log(`Hola ${dato}`))

//-------------------------//
//Esta manera es para recibir en la consola el indice(lugar que ocupa) de los nombres
usuarios.forEach((dato, indice) => console.log(`indice:${indice} , dato:${dato}`))

//-------------------------------//
usuarios.forEach(function(dato, indice){
    console.log(indice + dato)
})