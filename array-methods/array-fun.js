/**
 * Se ha creado una nueva unidad para medir el veneno de las arañas. Se llama 
 * venominia, que es la cantidad de toxinas por mm de sangre que una araña
 * puede inyectar. 
 * 
 * Se pide implementar una función que dada una entrada, filtre, usando el método
 * filter, todas las arañas que al menos tienen dicho nivel de venominia.
 */
 function filterByVenom(spiders, venominia) {
    let spidersArray = []
    spidersArray = spiders.filter(b => b.venominia >= venominia )
    return spidersArray
}

module.exports = {
    filterByVenom
}
