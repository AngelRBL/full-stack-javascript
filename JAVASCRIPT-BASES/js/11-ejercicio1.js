/*
1- el ejercicio es que el navegador nos pida dos numeros de pantalla, que diga cual es mayor y si son iguales

2- Si no introducimos un numero nos va a seguir pidiendo el numero
*/
while (isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt('Introduce el 1er numero'))
    var numero2 = parseInt(prompt('Introduce el 2do numero'))
}

if (numero1 > numero2) {
    alert(numero1 + ' Es mayor que ' + numero2)
} else if (numero1 < numero2) {
    alert(numero2 + ' Es mayor que ' + numero1)
} else if (numero1 === numero2) {
    alert(numero1 + ' Y ' + numero2 + ' Son iguales')
}


