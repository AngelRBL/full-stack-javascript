/*
Operadores
+ Suma
- Resta
/ Division
% Resto de la division
* Multiplicacion
*/

// cuando sumas un texto y un numero se concatena(se junta el texto y el numero)

// Hay dos formas de añadir espacio una es dejar un espacio vacio en el string del console.log y la otra es añadir un string vacio.

// Es mas comodo hacerlo de la primera manera

let texto1 = 'Hola'
let texto2 = 'Mundo'
let numero = 5
let valor = true
let numero2 = numero + 2

// al sumar la variable numero + 2 da 52 porque el console.log esta recibiendo la variable numero como un string

// Para evitar que el console.log te recoja la variable numero como string es con los templates strings

console.log('Mi variable texto1 contiene ' + texto1 + ' Y mi texto2 ' + texto2)

console.log('Mi numero es ' + numero + ' Y m valor es ' + valor + ' Mi numero mas dos es ' + numero2)