// Los simbolos son un nuevo tipo de datos en ES6. 
// El objetivo de los mismos es crear 'coalliation free property augmentations' en objetos
// Symbol("foo") === Symbol("foo"); // false
// No se pueden instanciar

var isBlack = Symbol();
var tshirt = {};
tshirt[isBlack] = true;
console.log(tshirt[isBlack]);  // imprime true


// Otro ejemplo de uso: Como propiedad de un objeto:
const MY_KEY = Symbol();
let obj = {
    [MY_KEY]: 123
};

// Otro ejemplo: Para definir el nombre de functiones
const FOO = Symbol();
let obj1 = {
    [FOO]() {
        return 'bar';
    }
};
console.log(obj1[FOO]()); // imprime bar

//!importante. Symbol es un tipo primitivo. Probar typeof bla siendo bla in symbol