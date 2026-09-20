console.log('hello world');
//objects
// 

// let 
// const 


const circle1 = {
    radius: 1,
    location: {
        X: 1,
        y: 1
    },
    draw: function() {
        console.log('draw')
    }
}
circle1.draw();


//factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}
const circles = createCircle(1);

//constructor function 
function Circle(radius) {
    this.raidus = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const another = new Circle(1);



//functions and objects 
/* in javascript functions are objects */ 


const Circle1 = new Function('radius', `
    this.raidus = radius;
    this.draw = function() {
        console.log('draw')
    }
`); 

/* value types 
-Number
-String
-boolean
-Symbols
-Undefined
-Nulls
Reference TYpes 
-Object
-Fucntion
-Arrays
*/ 

//Primitive and object bhevaiour 
let x = {value : 10 }
let y = x 

x.value= 20; 


let obj = {Value: 10};
function increase(obj) {
    obj.Value++ ;
}

increase (obj); 
console.log(obj)

// Primitives are copied by their Value 
//Objects are copied by their reference 


//Adding / Removing properties 



function Circle2(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle2 = new Circle(10);
circle2.location = {x: 1};

const propertyName = 'location'; 
circle2[propertyName] = {x: 1}; 


//delete circle.location; 


//Enumerating properties

// for (let key in circle) {
//     if (typeof circle[key] !== 'fucntion')
//         console.log(key, circle[key]);

// }
// const keys = Object.keys(circle);
// console.log(keys);


// if ('radius' in circle)
//     console.log('CIrcle has a radius');



function Circle(radius) {
    this.radius = radius; 

    this.defaultLocation = { x:0, y:0}
    this.computerOptimumLocation = function() {

    }

    this.draw = function() {
        this.computerOptimumLocation
        console.log('Drawing')
    }
}

const circle = new Circle(10);
//abstraction: hiding details and only showing examples 

