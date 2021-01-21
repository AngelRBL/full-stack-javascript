//--JSON ES UN SISTEMA DE GUARDADO DE INFORMACION.
//--LO USAN MUCHO LOS SERVIDORES PARA MANDARLOS INFORMACION CUANDO HACEMOS PETICIONES DE SERVIDOR.

let user = {
  "nombre" : "Angel",
  "edad": 22
}

//--JSON tambien se puede convertir en un string
let userstring = JSON.stringify(user)

console.log(typeof(userstring))

//--tambien podemos hacer lo contrario, si tenemos la sintaxis correcta podemos convertirlo en JSON

let jsonuser = JSON.parse(userstring)

console.log(jsonuser)