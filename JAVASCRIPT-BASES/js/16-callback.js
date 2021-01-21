//--FUNCION CALLBACK--//
//-->El callback se llama dentro de la funcion principal

// const suma = (numero1, numero2, callback) => {
//     let resultado = numero1 + numero2
//     console.log(resultado)
//     callback(resultado)
// }

//--> el callback se define afuera de la funcion principal.

//1er manera de definirlo es con funciones de flecha

// suma(4, 2, dato => console.log(dato * 2))

//--2da manera de definirlo es con funcion normal

// suma(4, 2, function(dato){
//     console.log(dato * 2)
// })
//------------------------------------------//
//aqui estoy indicando una funcion como tercer parametro que va a recibir un dato y me va a ejecutar la funcion por consola

const suma = (numero1, numero2, callback) => {
    let resultado = numero1 + numero2
    console.log(resultado)
    callback(resultado)
}
// suma(4, 2, dato => console.log(dato * 2))
 
const porconsola = dato => console.log(dato)

//Esta funcion recibe un dato como tercer parametro(callback) y me va a ejecutar la funcion por la consola del explorador

//Ejercicio Angel
suma(4, 2, dato => porconsola(dato * 2))

const multi = (numero1, numero2, callback) => {
    let resultado = numero1 * numero2
    console.log(resultado)
    callback(resultado)
}
multi(200, 100, dato => console.log(dato * 500))