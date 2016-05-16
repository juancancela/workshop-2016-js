class Person {
    constructor(name, lname){
        this._name = name;
        this._lname = lname;
    }
    
    get name(){
        return this._name;
    }
    
    set name(value){
        this._name = value;
    }
    
    get lname() {
        return this._lname;
    }
    
    set lname(value){
        this._lname = value;
    }
}

let person1 = new Person("Juan Carlos", "Cancela");
console.log(`${person1.name} ${person1.lname}`);