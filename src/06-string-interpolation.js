// Ejemplo simple
const countNumbers = () => {
  for(var i = 0; i < 10; i++){
    console.log(`${i}`)
  }
}

countNumbers();


// Ejemplo usando templating
function template(strings, ...keys) {
  return ((...values) => {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach((key, i) => {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

let t1Closure = template`${0}${1}${0}!`;

console.log(t1Closure('Y', 'A'));  // "YAY!" 