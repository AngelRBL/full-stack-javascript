//Que son?
//es un codigo que vamos a reutilizar
//las funciones pueden tambien no recibir parametros

// function suma(numero1, numero2) {
//     console.log(numero1 + numero2)
// }
// suma(10, 2)
// suma(5, 4)

//----EJERCICIO
function comprobador(numero) {
    if (numero % 2 === 0) {
        console.log(numero + ' si es par')
    }else if(isNaN(numero)){
        console.log('No es un numero')
    }else {
        console.log(numero + ' no es par')
    }
}
comprobador(10)
comprobador(13)
comprobador('hola')


