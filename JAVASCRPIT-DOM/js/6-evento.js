//--> .addEventListener sirve para anadirle un evento al boton

// const Button = document.getElementById('MyButton')

// Button.addEventListener('click' , () => {
//   console.log('CLICK!!')
// })

// const contenedor = document.getElementById('contenedor')

//-- mouseover significa el raton por encima

// contenedor.addEventListener('mouseover', () => {
//   console.log('raton encima')
// })
// contenedor.addEventListener('mouseout', () => {
//   console.log('raton fuera')
// })

//-----------------FOCUS-----------------//
//--FOCUS va a capturar el evento cuando nosotros estemos dentro del input

// const nombre = document.getElementById('nombre')

// nombre.addEventListener('focus', () => {
//   console.log('focus')
// })


//-------------------BLUR---------------------//
//--Captura el evento cuando nos salgamos del input
// nombre.addEventListener('blur', () => {
//   console.log('blur')
// })

//--------------------KEYUP-------------------//
//--captura la tecla del teclado en el document
//--el .key es para acceder a nombre(tecla pulsada)
//---con KEYUP hace el evento cuando tenemos la tecla hacia arriba


// document.addEventListener('keyup', (e) => {
//   console.log( 'HAS PULSADO LA ' + e.key)
// })

//---De esta manera mediante eventos podemos realizar todas las acciones

// document.addEventListener('keyup', (e) => {
//   if (e.key === 'a') {
//     document.body.style.background = 'red'
//   }else if (e.key === 'b') {
//     document.body.style.background = 'blue'
//   }
// })

//---------------KEYDOWN-----------------//
//---CON 'keydown' hace el evento cuadno tenemos la tecla pulsada.

// document.addEventListener('keydown', (e) => {
//   console.log('EJECUTANDOSE!!')
// })

//-------------------KEYPRESS-------------------//
// con KEYPRESS registra la tecla cuando la presionamos.

// document.addEventListener('keypress', (e) => {
//   console.log('EJECUTANDOSE!!')
// })


//-------------PreventDefault-------------------//
//--Los eventos que hayan por defecto cuando se pulsa una tecla lo va a quitar del navegador

// document.addEventListener('keydown', (e) => {
//   e.preventDefault()
// })

