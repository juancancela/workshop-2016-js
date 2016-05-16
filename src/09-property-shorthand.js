// Al crear objetos, si las properties no tienen right side, se asume el nombre de
// la variable como la key del objeto.

let name = 'Juan';
let lname = 'Cancela';

let person = { name, lname };

console.log(person);
