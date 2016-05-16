// ES6 da la posibilidad de definit default values para los parametros de una function
const person = (name = 'Juan', lname = 'Cancela', age = 32) => {
    console.log(`${name} ${lname}, ${age}`);
}

person();