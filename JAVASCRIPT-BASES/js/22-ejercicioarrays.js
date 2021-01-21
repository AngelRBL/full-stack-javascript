//EJERCICIO
//me pida por pantalla que me pida un array
//crear
//borrar
//listar

// let usuarios = ['Angel', 'Camila', 'Jose', 'Maria']

// let pregunta = prompt('Que desea hacer con el Array')

// switch(pregunta) {
//     case 'crear':
//         let pregunta2 = prompt('Que desea anadir al array')
//         usuarios.push(pregunta2)
//     break;
//     case 'borrar':
//         usuarios.pop()
//     break;
//     case 'listar':
//         usuarios.forEach(dato => document.write(dato))
//     break;
//     default:
//         alert('No has introducido un dato valido')
//     break;
// }

//Ejercicio para parender Angel
let usuario = ['Angel ', 'Roberto ', 'Andres ', 'Adrian ', 'Juan ', 'Misael ']

let pregunta = prompt('Que desea hacer')

switch(pregunta) {
    case 'crear':
        let pregunta2 = prompt('Que desea anadir al array')
        usuario.push(pregunta2)
    break;
    case 'borrar':
        usuario.pop()
    break;
    case 'listar':
        usuario.forEach(dato => document.write(dato))
    break;
    default:
        alert('No has introducido un dato valido')
    break;
}
