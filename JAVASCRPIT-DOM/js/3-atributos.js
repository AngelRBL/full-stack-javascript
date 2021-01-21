//--De esta manera puedo acceder a su atributo
const mih1 = document.getElementById('Mih1')
// console.log(Mih1.getAttribute('class'))

//--De esta manera podemos ponerle una clase al h1 
//--------primero va el atributo y despes va el nombre del atributo
mih1.setAttribute('class', 'TituloPrincipal')

//---Class

//ESTA ES OTRA MANERA DE HACERLO QUE NO SEA MEDIANTE setAttribute()

//--Este sirve para ponerles nombre a la clase
mih1.className = 'miClase'

mih1.classList = 'miClase2'
console.log(mih1)
