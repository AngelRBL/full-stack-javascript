const load = document.getElementById('load')

fetch('https://jsonplaceholder.typicode.com/users')
.then(dato => dato.json())
.then(dato => {
  dato.map(elemento => {
    document.write(`${elemento.name}  <br>`)
  })
  
})


//--Esta es una forma de como hacer que solo se muestre el parrafo--//
// .then(dato => {
//   load.style.display = 'none'
//   console.log(dato)
// })