// El hasChildNodes() sirve para checar si hay contenedores hijos.
// const contenedor = document.getElementById('contenedor')

// console.log(contenedor.hasChildNodes()) 

//-----FirstChild y firstElementChild
//si se pone si espacios de devuelve el primer elemento

// const contenedor = document.getElementById('contenedor')

// console.log(contenedor.firstChild)


//Este sirve para sacar el primer elemento

// console.log(contenedor.firstElementChild)

//---lastChild y lastElementChild

//lastChild

// console.log(contenedor.lastChild)

//lastElementChild

// console.log(contenedor.lastElementChild)

//------- HTML COLLECTION

const contenedor = document.getElementById('contenedor')

// const hijosdeContenedor = contenedor.children

// console.log(hijosdeContenedor)

//Esto hace que devuelva un HTML collection(h1, p y span)
//para acceder solo al contenido del h1 se puede hacer lo siguiente:

// console.log(hijosdeContenedor[0].innerText)

//Para convertirlo en un Array es lo siguiente:

//El .from() recibe lo que quieres convertir en array

//Existen 2 maneras para convertir en array:

//-- Array.from()

const hijosdeContenedor = Array.from(contenedor.children)

//--Para recorrerlo se utiliza un .map

// hijosdeContenedor.map(elemento => console.log(elemento.innerText))

//Para sacar solo 1 elemento es lo siguiente:
const hijosFiltrados = hijosdeContenedor.filter(elemento => elemento.innerText === 'ADIOS')
// console.log(hijosFiltrados[0].innerText)
const hijosNodos = Array.from(contenedor.childNodes) 

hijosNodos.forEach(elemento => console.log(elemento.innerText))
//para solucionar los undefined se podria quitar los espacios(de las etiquetas) del HTML
// Es mejor trabajar elementos que con Nodos pero tambien podrias hacer un .filter() y hacer que no muestre los undefined porque serian los espacios.
