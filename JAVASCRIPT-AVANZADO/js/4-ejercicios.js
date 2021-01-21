//--vamos a simular el funcionamiento interno de las funciones recorredoras de array

let numeros = [1, 2, 3, 4]

//--------------EJEMPLOS---------------//
// numeros.map((e) => {
//   console.log(e)
// })

const mirecorredor = (arr, callback) => {
  for(let i = 0; i < numeros.length; i ++) {
    callback(arr[i])
  }
}

mirecorredor(numeros, (elemento) => {
  console.log(elemento)
})



// const dividir = (n1, n2) => {
//   return new Promise ((resolve, reject) => {
//     let results = n1 / n2
//     if (n1 > 200) {
//       reject('Hubo un problema con las peticiones')
//     } else {
//       resolve(results)
//     }
//   })
// }

// dividir(200, 10)
// .then((data) => console.log(data))
// .catch((demise) => console.log(demise))

// let Form = document.getElementById('Form')
// let Btn = document.getElementById('Button')
// let Password = document.getElementById('password')
// let Email = document.getElementById('mail')
// let BtnRS = document.getElementById('ButtonRS')

// Btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   if (Password.value.length > 8) {
//     Password.value = ''
//     Email.value = ''
//     console.log(`El correo es: ${Email.value} y la contrasena es: ${Password.value}`)
//   } else {
//     Password.value = ''
//     Email.value = ''
//     Email.style.color = 'red'
//     Password.style.color = 'red'
//     console.log('El formulario no esta completo')
//   }

// })

// BtnRS.addEventListener('click', () => {
//   Password.value = ''
//   Email.value = ''
//   console.log('Se borro este formulario')
// })