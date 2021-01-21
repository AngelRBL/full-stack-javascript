const contenedor = document.getElementById('contenedor')

const reply = confirm('Quieres crear un elemento?')
if (reply) {
  //-Aqui se pregunta el elemento que se quiere crear
  const element = prompt('Que elemento quieres crear?')
  //-Aqui se crea el dicho elemento
  const elementCreated = document.createElement(element)
  //-Aqui se pregunta el contenido que tendra
  const content = prompt('Que Contenido tendra?')
  //-Aqui se agruega dicho contenido
  elementCreated.innerText = content
  //-Aqui se pregunta que atributo tendra el dicho elemento
  const attribute = prompt('Que atributo tendra?')
  const attributeValue = prompt('Que valor tendra ese atributo?')
  elementCreated.setAttribute(attribute, attributeValue)
  //-Aqui se pregunta el color de fondo
  const backgroundColor = prompt('Que color tendra de fondo?')
  elementCreated.style.background = backgroundColor
  contenedor.appendChild(elementCreated) 
}
const ButtonSend = document.getElementById('Button')
