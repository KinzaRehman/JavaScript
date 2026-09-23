// What is the difference between an object and an array in JavaScript?
//Object is something using named properties
const RS = {
    name: "Leon",
    job: "SWE king",
    role: "insightgul",
}; 
console.log(RS.name)
//arrays list of values
const RSSkills = ["HTML", "CSS", "Responsive Web Desgin", "JavaScript"] 
console.log(RSSkills[2])


// Four different ways of creating objects & why
//1: Object literal {} , creating a simple object
const person = {
    name: "Apple",
    age: 1
}

//2. 
const personNew = new Object();
person.name = "notebook"
person.age = 25


//3. constructor fucntion 
function Person(name, age) {
    this.name = name,
    this.age = age
}
const person1 = new Person("jssica", 20)
const person2 = new Person("batman", 40)

//4. just looks prretier but a new way of doing it 
class PersonModern{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
const personMod1 = new personModern('human', 30)
const personMod2 = new personModern('not', 40)


//object lietral 
const animal = {
    noise(){
        console.log('animal Sound')
    }
}
//creating object from an object
let dog = Object.create(animal)
console.log(dog.noise)

// What does it mean when we say objects and arrays are mutable?
//mutable is you can change something 













// What is Object-oriented programming
// Create a shopping cart using OOP
// Can you explain why two objects that look the same are not considered equal in JavaScript?
// What is a higher-order function?
// Review map() , filter() & reduce()