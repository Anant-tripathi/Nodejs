//import {x}, from './app'
const app = require('./tobeimported')

//var x = '20';
const arr=[2,4,5,6,3,7];
console.log(arr[0])
console.log(app.y)
console.log(app.z())
console.log(app)

//filter function => the filter method creates a new array filled with elements that 
//pass a test provided by a function
let result = arr.filter((item)=>{
	return item>4
});
console.warn(result)

//arrow function => arrow functions allow us to write a shorter function syntax
//
//core modules & external modules
//basic features that are built into the the programming language are called core modules
//example -> console, fs(file system), buffer, HTTP
//
//core modules are of two types:
//GLOBAL -> modules that do not need to be imported to use are global
//NON-GLOBAL -> modules that need to be imported to use are non-global
//
console.log("->>", __dirname);
console.log("->>", __dirname);

const fs=require('fs').writeFileSync;
fs("tmp.txt", "abc");


