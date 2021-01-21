const contenedor = document.getElementById('contenedor')
//Preguntar si quiero crear un elemento
const respuesta1 = confirm('Quieres crear un elemento?')
if(respuesta1) {
  //Preguntar que elemento quiere crear
  const elemento = prompt('Que elemento quieres Crear?')
  //Crear dicho elemento 
  const elementocreado = document.createElement(elemento)
  //Preguntar su contenido
  const contenido = prompt('que contenido tendra?')
  //Agregar dicho contenido
  elementocreado.innerText = contenido
  //Que atributo tendra dicho elemento
  const atributo = prompt('Que atributo tendra?')
  const valoratributo = prompt('Que valor tendra ese atributop?')
  elementocreado.setAttribute(atributo, valoratributo)
  //De que color va a ser el fondo
  const color = prompt('Que color tendra el fondo?')
  elementocreado.style.background = color
  contenedor.appendChild(elementocreado)

}