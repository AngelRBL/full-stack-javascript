//FUNCIONES DE FLECHA es de ECMAS6

//el resultado de la finalidad es la misma que las funciones pero la sintaxis es distinta

//---Esta es una funcion sin flecha

// function sumar(numero1, numero2) {
//     console.log(numero1 + numero2);
// }
// sumar(10, 4)

//-->Esta es una funcion de flecha

// const sumarflecha = (numero1, numero2) => {
//     console.log(numero1 + numero2)
// }
// sumarflecha(40, 40)

//se declara una constante porque nuestra funcion no va a cambiar

//Las funciones flecha nos permiten en ciertas ocasiones declarar funciones de una manera mas rapida

// const porconsola = dato => console.log(dato)
// porconsola('Esto es una prueba')

//si solo recibe un parametro no hace falta poner parentesis ()

// si solo recibe una linea de ejecucion no hace falta la llave {}

//De esta manera podemos declarar funciones de manera mas rapida
//---------------------------------//
//--->AMBITO DE LAS FUNCIONES<---//

//---Una variable creada dentro de una funcion no puede ser accedida desde fuera, siempre debe de estar dentro de la funcion

const sumarflecha = (numero1, numero2) => {
    return numero1 + numero2
}
document.write(sumarflecha(4, 4))
