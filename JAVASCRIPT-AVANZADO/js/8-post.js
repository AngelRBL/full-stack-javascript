let usuario = {
  'nombre': 'Angel',
  premium: true
}

//--DE ESTA MANERA PODEMOS HACER UN POST DE USUARIO EN NUESTRO SERVIDOR O API--//

fetch('https://jsonplaceholder.typicode.com/users', {
  method:'POST',
  headers:{'content-type': 'data/json'},
  body:usuario
})
.catch(err => console.log(err))
.then(() => {
  console.log('EXITO')
})