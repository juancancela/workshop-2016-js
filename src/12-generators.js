// Cada vez que un generador retorna, su stack frame – las variables locales, 
// argumentos, valores temporales, y la posición de ejecución en el cuerpo del 
// generador – se remueven de la pila (stack). Sin embargo, el objeto Generator
// mantiene una referencia (o una copia) de este stack frame, para que el 
// próximo llamado a .next() pueda reactivarlo y continuar la ejecucion.

// Los generadores no son threads

// Puedes crear tus propios iteradores al implementar dos métodos: [Symbol.iterator]() y .next()

// class RangeIterator {
// constructor(start, stop) {
//    this.value = start;
//    this.stop = stop;
//  }
// 
//  [Symbol.iterator]() { return this; }
// 
//  next() {
//    var value = this.value;
//    if (value &lt; this.stop) {
//      this.value++;
//      return {done: false, value: value};
//    } else {
//      return {done: true, value: undefined};
//    }
//  }
//}

var Chance = require('chance');
var chance = new Chance();

function* _generateEvent() {
  let event = {
    descr: chance.paragraph(),
    date: chance.date({year: 2015}),
    location: chance.address(),
    images: [chance.url({extensions: ['gif', 'jpg', 'png']}), chance.url({extensions: ['gif', 'jpg', 'png']})],
    links: [chance.url(), chance.url(), chance.url(), chance.url()]
  };

  yield event;
}

console.log(_generateEvent().next().value);
console.log("----");
console.log(_generateEvent().next().value);
console.log("----");
console.log(_generateEvent().next().value);
console.log("----");
console.log(_generateEvent().next().value);
console.log("----");
console.log(_generateEvent().next().value);