//SELECCIONAR POR ID
//Utilizar el selector por id para JavaScript.

// const mih1 = document.getElementById('MyElement')

// console.log(mih1)

//SELECTOR POR CLASE
//Utilizar el selector de clase para CSS.

// const myh1 = document.getElementsByClassName('myelement')
// console.log(myh1)

//SELECTOR POR ETIQUETA
//Con este selector recibes el elemento solo con su etiqueta
// const h1coll = document.getElementsByTagName('h1')

// console.log(h1coll)

//QUERY SELECTOR
//Con query selector puedo seleccionar por:
//--ID
//--CLASE
//--ETIQUETA

// const myh1 = document.querySelector('h1')
// console.log(myh1)

//--Este es para seleccionar 1 elemento

// const myh2 = document.querySelectorAll('h1')
// console.log(myh2)

//--Este sirve para seleccionar mas de 1 elemento con el mismo nombre.

//El query Selector no solo se puede aplicar al documento, tambien lo podemos aplicar en un elemento padre en concreto.
//--Aqui un ejemplo:

const contenedor = document.getElementById('contenedor')
const mih1 = contenedor.querySelector('h1')
console.log(mih1)