let skills = ['programming', 'soccer', 'swimming'];
let person = {
    name: "Juan",
    lname : "Cancela",
    [`${skills.length} skills`]: skills
}

console.log(person);