//arreglos - arrays
// let usuarios = ['Juan', 'pepe', 'adrian', 'fran']
// console.log(usuarios[0])

let username = 'Angel'
let userage = 24
let premium = true

let userAngel = [username, userage, premium]
// console.log(userAngel)

//Array multi-dimensionales
 let participantes = [['Angel', 'Manu', 'Fransisco'], ['Paca', 'Camila', 'Peppa']]
//  console.log(participantes[1])

//Ejercicio de Angel
let hombres = participantes[0]
let mujeres = participantes[1]

let pregunta = prompt()

if (pregunta === 'hombres') {
    console.log(hombres)
} else if(pregunta === 'mujeres'){
    console.log(mujeres)
}
