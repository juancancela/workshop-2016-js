// No es posible agregar nuevas keys al objeto definido, pero se puede 
// resetear el valor de las keys existentes
const computer = {
  brand: "Apple",
  model: "II"
}

// valido!
computer.brand = "Microsoft";

// throw error
computer.price = "1564";