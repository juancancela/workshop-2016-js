
// ES6 provee un nuevo feature similar al varargs de Java.
function person(name, ...skills) {
  console.log("name: " + name);
  console.log("skills:");
  skills.forEach(function(skill){
    console.log("* " + skill);
  });
}

person('Juan', 'programacion', 'literatura', 'futbol');