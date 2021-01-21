
const Form = document.getElementById('myform')
const Name = document.getElementById('nombre')
const Age = document.getElementById('edad')

const Character = ['$', '%', '&', '/', '?', '@', '#', '^', '~', '+', '=', '*', '!', '-', '<', '>', ',', '.', ':',';', '{', '}', '"', '_', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

const Lt = ['q', 'w', 'e', 'r', 't', 'y', 'u',]

//---se necesita capturar el formulario para poder capturar el evento submit

//-------De esta manera podemos validar formularios de forma muy sencilla


Form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('SUBMIT DONE!')
  console.log(`El nombre es: ${Name.value} 
  La edad es: ${Age.value}`)
})

//------------VALIDAR FORMULARIOS------------//

//----De esta forma se pone limite en el nombre y si esta dentro del limite se pone un color pero si no lo esta se pone de otro color

Form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (Name.value.length > 1) {
    Name.style.color = 'green'
  } else {
    Name.style.color = 'red'
  }
})

//-----De esta manera borras el contenido que se a escrito en el formulario

Form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (Name.value.length > 1) {
    Name.value = ''
  }

})


//---------DE ESTA MANERA PODEMOS VALIDAR FORMULARIOS DE MANERA DINAMICA--------//

Name.addEventListener('keydown', (e) => {
  Character.map(elemento => {
    if (e.key === elemento) {
      alert('No se acceptan caracteres especiales')
    }
  })
})

