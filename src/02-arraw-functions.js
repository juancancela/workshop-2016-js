// Las arrow functions son una nueva forma de definir funciones en Javascript.
// Hay algunas diferencias respecto al metodo tradicional de definicion de
// funciones en JS: 
//  * No hay this
//  * No puede ser instanciado con new
//  * No tiene prototipo
var binomio_arr = (a, b) => (a * a) + (2 * a * b) + (b * b);


function binomio_old(a, b){
  return (a * a) + (2 * a * b) + (b * b);
}

// Otro ejemplo
var sortedPrices = arrayOfPrices.sort( (a, b) => a - b);