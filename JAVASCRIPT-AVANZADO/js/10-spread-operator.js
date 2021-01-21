//--Al hacer esto produce el error de suplantar el numero 4 por el 10 en la variable numeros--//

// let numeros = [1, 2, 3, 4]

// let numeroscopiados = numeros

// numeroscopiados[0] = 10

//--COMO SOLUCIONAR EL PROBLEMA DE ARRIBA CON SPREAD OPERATOR, DEBES USAR LO SIGUIENTE--//

let numeros = [1, 2, 3, 4]

let numeroscopiados = [...numeros]

numeroscopiados[0] = 10
//-------------------------------------//
//--Aqui creamos otra variable con numeros, para poder juntar las 2 variables numeros tenemos que hacer lo siguiente--//
//--La variable numeroscompletos concatena las 2 variables numeros--//
//--Incluso podemos agregarle Strings a la concatenacion--//

let numeros2 = [5, 6, 7, 8]

let numeroscompletos = [...numeros, 'separador', ...numeros2]

// console.log(numeros)

//--DE ESTA MANERA PODEMOS MOSTRAR LOS DATOS EN LA CONSOLA SIN TENER QUE RECORRER EL ARRAY SIMPLEMENTE DIGAMOS DESCOMPONIENDOLO MEDIANTE EL SPREAD--//

//---------------------------------------------//

//--Aque otro ejemplo de como solucionar el error--//
//-Esto hace que se sustitulla el nombre tanto la variable userCopy como user-//

let user = {
  name: 'Angel',
  age: 22
}

// let userCopy = user
// userCopy.name = 'Manu'
//--PARA SOLUCIONAR EL ERROR ANTERIOR DEBEMOS DE HACER ESTO--//
let userCopy = {...user}

userCopy.name = 'Manu'
