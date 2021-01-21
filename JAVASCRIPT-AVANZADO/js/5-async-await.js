//-El async y await es la manera de mejorar todavia mas los callback es decir que es mejor que las promesas, mas simples a nivel de codigo-//

//--Sabiendo que el async y el await es mejor que las promesas se siguen utilizando las promesas--//

//--La finalidad es la misma que los callback para cuando necesitamos tener una funcion y no sabemos cuanto tiempo va a tardar en debolbernos el resultado y despues queremos hacer algo con el resultado, queremos que ese algo que vallamos a hacer no sew ejecute hasta que tengamos el resultado--//

const suma = (n1, n2) => {
  return n1 + n2
}

const porconsola = async (dato) => {
  let resultado = await suma(4, 9)
  console.log(dato + resultado)
}

//----try, catch y reject----//

//--El try y catch es para evaluar errores de una porcion de codigo decidir que vamos a mandar si pasa ese error y despues capturarlo con el catch--//

try {
 let resultadoS = suma(10, 10)
 if (resultadoS === 20) {
   console.log(resultadoS)
  } else {
   throw('la suma no se realizo correctamente')
 }
}

//--EL catch solamente se va a ejecutar si se da error(si la condicion no se cumple)--//
catch(err) {
  console.log(err)
}