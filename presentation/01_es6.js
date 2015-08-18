
// JAVASCRIPT

// ES6(ES2015) June 17, 2015;


// Babel - transpailer





// Types

5
2.5

true
false

'single quote string'
"double quote string"
`string interpolation ${5 + 4}`

null
undefined


// Variables

// never use var
let a = 4;
const b = 7;
a = 15;
// b = 14; not permited


// Functions

function name(argument) {
  //body
  return 7;
}
// anonymous function with implicit return
(argument) => "returned result";

() => {
  return "result";
};

// Data structures

//Array
const a = [1, 2, 3];
//Object(map like) - not ES2015 Map
const a = {
  key: value,
  anotherKey: value,
}
//trailing , is accepted in
a.key = 15;
a.key = a.anotherKey;


// Control statement

if (condition) {
  //body
}
if (a <= 5) {
  //body
} else {
  //body
}
// expresion variant
let a = (condition)? true_expresion : false_expresion;


// Looping
while(contion) {
  //body
}
for(let i = 0; i < 15; i++) {
  //body
}

// loop over Arrays
var a = [1, 2, 3];
for(let i = 0; i < a.length; i++) {
  console.log(i);
}
// expresion looping
a.forEach((i, index) => console.log(i, index));

// creating new arrays
a.map((i) => i * 2);


// Destructuring

let o = {
  key1: 15,
  key2: 47,
}
let {key1, key2} = o;
// this is same as
// let key1 = a.key1;
// let key2 = a.key2;

// works for arrays
let [a, b] = [0, 1];

// can catch rest arguments
let {key, ...rest} = {key: 15};
let [first, ...rest] = a;

// can rename object keys
let {key: renamedVariable} = {key: 15};

// destructuring work in function arguments
function drawSquare({x: x1, y: y1}, {x: x2, y: y2}) {
  //use variables x1, x2, y1, y2
}
drawSquare({x: 4, y: 3}, {x: 15, y: 15})


// Other usage of ... operator

function write(first, second, third) {
  console.log(first, second, third);
}
let a = [1, 2, 3];
//write(a); now first will be array and other will be undefined
write(...a);
// you can also use it with combination of other values
write(12, 13, ...a);

//coping to other strucutres
let a = [1, 2, 3];
let b = [5, 6, 7];
let c = [...a, 4, ...b];

let a = {key1 : 15};
let b = {key2 : 15};
let c = {...a, ...b, key1: 47}; // what will be val under key1?
let c = {key1: 47, ...a, ...b}; // what will be val under key1?

// Modules

// every file is module
// nothing from file is implicitly available
// in another module
const privateVar = 5;
// keyword for exposing is export
export const exportedVariable = 7;

// to import module use import statement in begining of file
import npmModule from 'moduleFromNPM'

// to import local files use relative path
import something from './secondFile'
// fileExtension is optional for javascript files

// imported create object with keys defined by export keyword
something.exportedVariable

//import only specific things from module - destructuring
import {first, second} from '.secondFile'


// Class-es

class Name {
  constructor() {
    //constructor is optional
  }
}
// creating instance
let a = new Name();

// inheritance
class Child extends Parrent {
}
// functions in class
class Name {
  nameOfFuction() {
  }
}
// variables in class - ES6
class Name {
  constructor() {
    this.state = 15
  }
  //ES7 proposal
  state = 15;
}

// !!! `this` is not scoped in class fuctions
// for beginers use ES7 propery inicializer and lambdas
class Name {
  state = 15
  myFunction() {
    console.log(this.state); // this is avalible
  }
}
let a = new Name().myFunction;
a(); //this will not work

// intermediate users ask me after how to use `this`




// Now you know how to code in javascript ES2015
