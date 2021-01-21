//--------------------INSERT BEFORE

//--Nos permite elegir un nodo del documentos antes que el.

// const contenedor = document.getElementById('contenedor')

// const parrafo1 = contenedor.querySelector('#parrafo1')

// const parrafo2 = document.createElement('p')

// parrafo2.textContent = 'PARRAFO NUEVO'

// contenedor.insertBefore(parrafo2, parrafo1)


//-----------------REPLACE CHILD 
//--> Sirve para reemplazar 1 hijo

//-----------------------nuevo hijo  hijo antiguo
// contenedor.replaceChild(parrafo2, parrafo1)


//--->CLONE NODE
//-- el cloneNode() recibe una copia del nodo

// const copia = contenedor.cloneNode(parrafo1)
// copia.style.color = 'red'
// contenedor.insertBefore(copia, parrafo1)
// console.log(copia)

//para eliminar el contenido del contenedor es lo siguiente.

// contenedor.removeChild(parrafo1)

//--------------->FRAGMENT<-----------//

const userDiv = document.getElementById('usuario')

const usuarios = ['Manu', 'Pepe', 'Juan', 'Jose', 'Nuria']

//-->Imprime los usuarios en el array al html.

//--el problema es que en JavaScript la operacion que mas memoria, mas recursos consume es la escritura del DOM.

//--->Esto esta consumiendo muchos recursos y hay una manera de optimizarlo mucho mejor.

// usuarios.map(e => {
//   let p = document.createElement('p')
//   p.innerText = e
//   userDiv.appendChild(p)
// })

//--->ESTA ES LA MANERA DE UTILIZARLO MUCHO MEJOR Y QUE NO CONSUMA MENOS RECURSOS Y MEMORIA.


usuarios.map(e => {
  let p = document.createElement('p')
  p.innerText = e
  //--Aqui crea un fragmento que es como una especie de caja donde nosotros podemos guardar cualquier cosa
  let fragmento = document.createDocumentFragment()
  fragmento.appendChild(p)
  userDiv.appendChild(fragmento)
})
