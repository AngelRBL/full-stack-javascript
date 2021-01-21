//--LAS PROMESAS NO SON MAS QUE UNA MEJORA DE LOS CALLBACK.
//--EL OBJETIVO QUE SE QUIERE CONSEGUIR UTILIZANDO LAS PROMESAS ES EL MISMO OBJETIVO QUE EXISTEN LOS CALLBACK, PARA TAREA QUE DEPENDIAN QUE OTRA ANTERIORMENTE YA HUBIERA FINALIZADO.

//-PARA ESO ESTAN LAS PROMESAS PARA MEJORAR EL CODIGO DE LOS CALLBACK


//--EL CALLBACK ES UNA FUNCION:

const sumar = (n1, n2, callback) => {
  let sumar = n1 + n2
  callback(sumar)
}

sumar(4, 5, (dato) => {
  console.log(dato)
})

//--Esto en programacion es conocido como callback hell(el infierno de los callback)

sumar(4, 5, (dato) => {
  funcion1(numero, () => {
    funcion2(numero, () => {
      funcion3(numero, () => {
        funcion4(numero, () => {
    
        })
      })
    })
  })
})
//--------------------------------------------//
const sumar = (n1, n2,) => {
  return new Promise((resolve, reject) => {
    let resultado = n1+ n2
    setTimeout(() => {
      resolve(resultado)
    }, 4000)
  })
}

const porconsola = (dato) => {
  console.log(dato)
}

//-EL .THEN() RECIBE UNA FUNCION DE CALLBACK QUE COMO PARAMETRO RECIBE LO QUE ESTA RESOLVIENDO LA PROMESA.

sumar(5, 5)
.then((dato) => {
  porconsola(dato)
})

//--------------------------------------//
//--CATCH recibe un callback y como parametro recibe lo que yo le haya rechazado en el reject()

const sumar = (n1, n2) => {
  return new Promise((resolve, reject) => {
    let resultado = n1 + n2
    if (n1 > 100) {
      reject('HUBO UN PROBLEMA, NUMERO DEMASIADO GRANDE')
    } else {
      resolve(resultado)
    }
  })
}

sumar(200, 20)
.then((dato) => console.log(dato))
.catch((rechazo) => console.log(rechazo))

