//Esta variable muestra los el dia junto con la hora
let date = new Date()

//Esta variable muestra la hora
let horas = date.getHours() % 12

//Esta variable muesta los minutos
let minutos = date.getMinutes()

console.log(`La hora es ${horas}:${minutos}`)