// el numeros.push(5) es para añadir un elemento en la ultima posicion

// el numeros.pop() es para eliminar el ultimo elemento de mi array

//El .unshift() es para añadir un elemento al principio

//El .shift() es para eliminar el primer elemento dentro de mi array

// let numeros = [1, 2, 3, 4]
// numeros.shift()
// console.log(numeros)


// SPLICE
//El splice elimina los elementos
//Su sintaxis es la siguiente

// let numeros = [1, 2, 3, 4]
// numeros.splice(2, 2)
// console.log(numeros)

//Para añadir elementos es de esta manera

// let numeros = [1, 2, 3, 4]
// numeros.splice(1, 0, 'Hola')
// console.log(numeros)

//------>EJERCICIO<------//
//SE PUEDE CREAR ELEMENTOS EN LA MITAD DEL ARRAY CON .LENGTH TANTO NUMEROS CON STRINGS

// let numeros = [1, 2, 3, 4]
// numeros.splice(numeros.length/2, 0, 'estoy en la mitad')
// console.log(numeros)

//------SLIDE--------//
//SLICE sirve para sacar una porcion del array
//la sintaxis es la siguiente
//slice(posicion, elemetos a sacar)

// let numeros = [1, 2, 3, 4, 5]
// let numeroshasta3 = numeros.slice(0, 3)
// console.log(numeroshasta3)

//-----CONCAT

// let chicos = ['Angel', 'Juan', 'Pedro']
// let chicas = ['camila', 'Maria', 'Andrea']

// let chicosychicas = chicos.concat(chicas)
// console.log(chicosychicas)

//COMO BUSCAR VALORES DENTRO DE UN ARRAY
//indexOf da la posicion del array
let chicos = ['Angel', 'Juan', 'Pedro']
let chicas = ['camila', 'Maria', 'Andrea']

let chicosychicas = chicos.concat(chicas)

console.log(chicosychicas)

const arraycheck = (arr, dato) => {
    if(arr.indexOf(dato) === -1) {
        console.log('No esta presente')
    }else {
        console.log('Si esta presente')
    }
}
arraycheck(chicosychicas, 'Angel')