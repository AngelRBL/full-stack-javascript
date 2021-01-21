const listafrutas = (nombre, supermercado, ...frutas) => {
  console.log(`La persona encargada es: ${nombre} el supermercado es: ${supermercado}
  las frutas son: ${frutas}
  `)
}

listafrutas('Pepe', 'Mercadona', 'Pera', 'Manzana', 'Platana', 'Granada', 'Limon', 'Fresa')