//filter sirve para el filtrado de ciertos elementos
//map me da todo los elementos para trabajar con ellos
//reduce lo que hace es combinar todos los elementos para devolver una sola cosa

//---MAP
//Se suele usar map para operaciones con cada dato
//MAP se usa para operar con cada dato de mi array

let numeros = [1, 2, 3, 4, 5]

// let numerospordos = numeros.map(function(dato) {
//     dato * 2
// })

//Esta funcion de flecha es lo mismo que la funcion de arriba
//Queda un codigo mas limpio

let numerospordos = numeros.map(dato => dato * 2)

//---->FILTER
//El numero filtrado va a conterner cada dato que cumpla con la condicion 

let numerosFilter = numeros.filter(dato => dato > 2)

//----->REDUCE
//Obtiene todos los datos y mediante de una operacion me devuelve solamente 1
//Esto va a obtener los elementos del array en grupos de dos y los va a sumar hasta que nos devuelva un solo dato

let numerosSuma = numeros.reduce((data1, data2) => data1 + data2)

//--^Aqui me esta devulviendo un resultado de la suma de todos los elementos del array

numerosFilter.forEach(data => console.log(data))
