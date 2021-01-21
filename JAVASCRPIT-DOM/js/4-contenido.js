//CREAR ELEMNETOS

//aqui se va a gaurdar el elemnto que valla a crear una constante

const parrafo = document.createElement('p')


//Para meterlo dentro del Contenedor podemos hacer lo siguiente:

//--Necesitamos guardar una constante en el contenedor

const contenedor = document.getElementById('Contenedor')

//1--Y ahora esto va a tener un metodo llamado appendChild

//2--Como parametro va a recibir lo que queremos añadir como hijo al contenedor.

//3--Este seria la constante parrafo 
//--Este se mostraria vacio.

contenedor.appendChild(parrafo)


//-Para darle contenido hay varias formas y vamos a verlas.

//-El parrafo que hemos creado queremos que tenga contenido podemos utilizar el .textContent.

//Solo utiliza .textContent cuando le queramos pasar texto

parrafo.textContent = 'HOLA MUNDO'

//-Que pasa si queremos que contenga otra etiqueta

//Si ponemos una etiqueda con textContent la etiqueta va a ser tomada como texto.

//-Para solucionar esto necesitamos usar .innerHTML en vez de textContent.

//--Utiliza .inerHTML cuando le quieras tambien dar una etiqueta.

parrafo.innerHTML = '<span>HOLA MUNDO</span>'

//--- .outerHTML
//--Con esto mi h1 se convierte en un parrafo
//--Con .outerHTML podemos cambiar el elemento en si, podemos cambiarle la etiqueta.
const mih1 = contenedor.querySelector('#titulo')

mih1.outerHTML = '<p></p>'

//-->Agruegar Estilos

parrafo.style.color = 'red'