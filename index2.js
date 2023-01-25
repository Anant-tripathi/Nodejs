const http = require('http');
//createServer(request, response)

function dataControl(req, resp){
	resp.write("<h1>hello this is anant</h1>");
	resp.end();
}

/*
const dataControl = (req, resp) => {
	resp.write("<h1>hello this is anant</h1>");
	resp.end();
};
http.createServer((req, resp)=>{
	resp.write("<h1>hello this is anant</h1>");
	resp.end();
}).listen(4500);
*/

http.createServer(dataControl).listen(4500);

//Package.json file
//package.json file is the heart of any Node project. It records import metadata about a
//project which is required before publishing to NPM, and also defines functional attributes
//of a project that npm uses to install dependencies, run scripts, and identify the entry
//point to our package.
//A package.json file must contain "name" and "version" fields and version must be in the form x.x.x and follow the semantic versioning guidelines.
//

//const colors = require('color');
//console.log("hello".red);

//Node.js is single threaded
//do not push node modules and add them to the .gitignore

//Nodemon is a module that allows live preview for the project
//npm i nodemon -g //global insatllation

console.log("hello")

//Node.js is an async language
//it does not waits for other commands to finish

