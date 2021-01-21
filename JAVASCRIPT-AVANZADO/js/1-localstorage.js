//el local storage es un pequeno almacenamiento que tenemos en el navegador que podemos guardar ciertos datos.
//La variable se queda guardada en el navegador.

let nombre = 'Angel'

localStorage.setItem('Minombre', nombre)

//--De esta manera se recogen los elementos de local storage.

let nombre1 =localStorage.getItem('Minombre')

console.log(nombre1)

//--Mediante este metodo podemos borrar todos los datos de local storage
localStorage.clear()