// variables
// Dynamically Typed
let firstName = "Kevin";
// const lastName = "Bernal";
// lastName = "Amin";
firstName = "Mustafa";
// console.log("Hello, " + firstName);

// data types
// strings, booleans, undefined, lists/arrays, objects(json), numbers
let isGameRunning = false; // 0 = False, 1 = true 

if (isGameRunning) {
    // console.log("The game is running");
} else {
    // console.log("The game is not running");
}

// Object
let person = {
    "age": 15,
    "personName": "Manuel"
}

// console.log(person.age);

// operations and arithmetic

let num1 = 5;
let num2 = 7;
// functions
function addTwo(x, y) {
    // return x + y;
    let total = x + y;
    console.log(total);
}
addTwo(num1, num2);
// console.log(total);

// Dom manipulation
function change() {
    document.getElementById('myImage').src = '../assets/gir2.png';
    console.log('clicked');
}