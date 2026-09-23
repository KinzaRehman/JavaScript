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
const personMod1 = new PersonModern('human', 30)
const personMod2 = new PersonModern('not', 40)


//object lietral 
const animal = {
    noise(){
        console.log('animal Sound')
    }
}
//creating object from an object
let dog = Object.create(animal)
console.log(dog.noise)

dog.noise = () => console.log('woof!');

// What does it mean when we say objects and arrays are mutable?
//mutable is you can change something 
//different methods to check for clicking and wins and user in a contianed class


// What is Object-oriented programming:OOP is organizing your code around objects.
//  We know objects can hold two things: data and behavior.
//  So instead of organizing code through functions and variables, 
// we use relationships around objects.

// Create a shopping cart using OOP

class shoppingCart { 
    constructor(user) {
        this.use = userthis.items = []
    }
    addItems(name, price) {
        this.items.push({
            name: name,
            price: price,
        })
    }
}
// Can you explain why two objects that look the same are not considered equal in JavaScript?
// What is a higher-order function?
// Review map() , filter() & reduce()