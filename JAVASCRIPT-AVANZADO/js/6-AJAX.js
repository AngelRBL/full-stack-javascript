//--Estos metodos son los mas utilizados en los servidores--//

//--El metodo get vamos a solicitar algo al servidor (un recurso)--//

//--El post se utiliza para enviar informacion, un recurso al servidor, por ejemplo al registarlos le enviamos nuestros datos al servidor y lo guarda en una base de datos.--//

//--El put sirve para reemplazar informacion que ya hay en el servidor--//

//--El delete sirve para eliminar o borrar los recursos de nuestro usuario--//

//--El jsonplaceholder es como una especie de servidor de prueba para que nosotros podamos hacer peticiones de tipo ajax --//

// let ajax = new XMLHttpRequest

// ajax.open('GET', 'https://jsonplaceholder.typicode.com/users')

//--el evento load me va a devolver mi peticion sobre lo que e echo--//

//--Como vimos en los ejemplos anteriores de JSON, para poder acceder a esos datos tenemos que poner una variable con JSON.parse() para que los devuelva en un en un array--//

//--Para acceder a el nombre de usuario tenemos que poner un .map() con el elemento y poner .name y de esa manera podemos sacar el nombre de todo --//

// ajax.addEventListener('load', (e) => {
//   let datos = e.target.responseText
//   let datosjson = JSON.parse(datos)
//   datosjson.map(elemento => {
//     console.log(`El nombre de este usuario es:${elemento.email}`)
//   })
// })

// ajax.send()

// let ajax = new XMLHttpRequest

// ajax.open('GET', 'https://jsonplaceholder.typicode.com/users')

// ajax.addEventListener('load', (e) => {
  
//   let data = e.target.responseText

//   let dataJson = JSON.parse(data)

//   console.log(dataJson)
// })
// ajax.send()

//----------AJAX CON PROMESAS----------//
//--De esta manera es una funcion asyncrona--//

const askajax = (metodo, destino) => {
  return new Promise((resolve, reject) => {
    let ajax = new XMLHttpRequest
    ajax.open(metodo, destino)
    ajax.addEventListener('load', (info) => {
      let datos = JSON.parse(info.target.responseText)
      resolve(datos)
  
    })

    ajax.send()
  })
}
const porconsola = (dato) => console.log(dato)

askajax('GET', 'https://jsonplaceholder.typicode.com/users')
.then((dato) => {
  porconsola(dato)
})


