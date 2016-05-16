// Using var, variable declaration is moved to the top of the function
// declaraction, no matter where is initially declared.

// Al usar var, la declaracion de la variable es movida al principio de la
// declaracion de la funcion, sin importar donde fue declarada inicialmente.
function dosth(value){
  if(value){
    var test;
    console.log("value");
  }

  // Intituively you may think test variable does not exist if value is not true,
  // but due to variable hoisting, thats not true.
  console.log("finished execution");
}

// Esto es lo que hace Javascript por detras
function dosth_hoisted(value){
  var test;

  if(value){
     console.log("value");
  }

  console.log("finished execution");
}


// ES6
function dosth_let(){
  if(value){
    let test;
    console.log("value");
  }

  console.log("finished execution");
}