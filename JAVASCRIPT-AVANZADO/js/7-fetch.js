//--FETCH es una manera mas simple de hacer las promesas--//
//--La funcion de fetch recibe una promesa internamente en la que nos resuelve una peticion--//

fetch('https://jsonplaceholder.typicode.com/users')
.catch(err => console.log(err))
//--El .then tiene la peticion .json(), lo que hace la peticion es extrae los datos json() de esa peticion--//
//--el dato le aplicas el metodo .json(), el metodo .json() es traer los datos json  y lo que recibe es fetch--//
//--El metodo .json() a su vez tambien tiene otra promesa --//
.then(dato => dato.json())
//---------------------------------//

//----Lo que esto resuelve es el .then de arriba----//
//--Esto resuelve los datos ya extraidos json --//
.then(dato => console.log(dato))

//--no porque fetch sea mas facil significa que descartes ajax con promesas completamente--//
//--Para un profesional de javascript siempre sabe todos los metodos, a todos los metodos me refiero a todas las formas de hacer una distinta cosa--//