//El steTimeout() sirve para mostrar en la consola cuanto tiempo va a tardar en mostrarse

//Aqui es utilizado con funcion de flecha
setTimeout(() => {
    console.log('Ejecutado')
}, 4000)
//Aqui es utilizado con funcion normal
setTimeout(function() {
    console.log('Ejecutado')
}, 5000)