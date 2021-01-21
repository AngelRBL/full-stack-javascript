/*
bucle for
*/

//el bucle for es una porcion de codigo que se va a ejecutar un determinado numero de veces puede que esten sujetos a una condicion y otra le indicamos nosotros

// su manera interna de funcionar es comprobar una condicion

//primero se crea una variable que se inicialice despues se crea una condicion mientras que i sea menor o igual a 9 se estara ejecutando

for(let i = 0; i <= 9; i ++) {
    // console.log(i)
}

//para sacar numero pares es:
for(let i = 0; i <= 9; i ++) {
    if(i % 2 === 0) {
        // console.log(i)
    }
}

// uso de continue
// El continue es para ignorar la condicion que se le puso al ciclo for:
for(let i = 0; i <= 9; i ++) {
    if(i % 2 === 0) {
       continue
    } else {
        // console.log(i)
    }
}

// esta es la manera para hacer que el ciclo for se rompa
for(let i = 0; i <= 9; i ++) {
    if(i === 6){
        break
    } else {
        // console.log(i)
    }
}
//break sirve para romper el bucle

///---------------------------------//
//BUCLE WHILE
//Si no cumple la condicion no se va a ejecutar

//El ciclo while tambien tiene continue,break los metodos que usamos en for tambien se pueden usar en while

// Esto es un bucle infinito
// para resolverlo se le agrega un i ++ para que llegue al limite indicado

// let i = 0
// while(i < 9) {
//     i ++
//     console.log(i)
// }


//-->BUCLE DO WHILE

let prueba = true

do {
    // console.log('Hola mundo')
}
while(prueba === false)

//sin importar ninguna condicion lo ejecuta 1 vez y despues para saber si tiene que seguir ejecutandolo comprueba la condicion