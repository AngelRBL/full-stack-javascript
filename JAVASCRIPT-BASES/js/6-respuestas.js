//Al juntar la variable con el prompt se utiliza para guardar la respuesta del cliente en la variable junto con el console.log

//document.write('') sirve para pintar la consola en el html

//Simplemete con una condicional evaluamos el dato que le hemos pasado por el prompt

// let Name = prompt('Introduce tu nombre')
// if(Name === 'Angel') {
//     document.write('Tu eres Angel!')
// } else {
//     document.write('Tu no eres Angel, Tu eres ' + Name)
// }


//El confirm es para darle botones al propmt con un mensaje, despues necesitaria un console.log para mandarlo a llamar


// let respuesta = confirm('Seguro que quieres entrar?')
// console.log(respuesta)

//Es mejor acostrumbrarte a trabajar con else if porque se va a trabajar en el futuro con otras cosas que tiene mas de 1 posibilidad

let decision = confirm('Seguro que quieres entrar')
if(decision === true) {
    document.write('Tu has decidido entrar')
}else if(decision === false) {
    document.write('Tu has decidido no entrar')
}
