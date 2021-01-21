//los objetos estan definidos por los siguientes:

//*Atributos:

//los atributos son propiedades de ese objeto que nos dan informacion sobre el.
//Por ejemplo, un usuario: el atributo seria el nombre, el correo electronico, la contrasena

//*Metodos:

//Los metodos son cosas que ese objeto puede hacer.
//por ejemplo un usuario puede registrarse, comprar un curso. esos son metodos

let usuario = {
    nombre: 'Juan',
    correo: 'correo@hotmail.com',
    contrasena: 'Poncho124',
    premium: true,
    mostrar: () => {
        console.log(`${usuario.nombre} ${usuario.contrasena}`)
    }
}
// console.log(`${usuario.nombre} ${usuario.contrasena} y su estado primium es ${usuario.premium}`)

for(cuenta in usuario) {
    document.write(cuenta + ' ')
    
} 
 //con object.keys() puedo convertir un objeto en array
