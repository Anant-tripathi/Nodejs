//Make a server
//create header and API body
//create an API with static data
//put data in another file
/*
const http = require('http');
const data = require('./data');
http.createServer((request, response)=>{
	response.writeHead(200, {'Content-Type': 'application\json'});
	response.write(JSON.stringify(data));
		response.end();
}).listen(5000);
*/
//various status codes for servers such as 200, 201, 404, 500

//inputting data and parameters from command line
//console.log(process.argv[2]) //process the arguments given along with command

//a functionality based on above concept
/*const fs = require('fs');
const input = process.argv;
if(input[2]=='add')
{
	fs.writeFileSync(input[3], input[4]);//filename, data to be entered
}else if(input[2]=='remove'){
	fs.unlinkSync(input[3]);
}else
	console.log("invalid input")
*/
// make files in a folder
// use path module - IMPORTANT
// get file names and print

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files_test') //get path for current directory
console.warn(dirPath);
/*
for(i=0;i<5;i++){
	//	fs.writeFileSync("hello.txt", "a simple text file");//creates a simple file single file
	fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file");
};*/

fs.readdir(dirPath, (error, files)=>{
	console.warn(files); //get data as an array
	files.forEach((item)=>{
		console.warn("file name is ", item); //get individual items
	})
});

//cannot access files outside the folder(upper folders) on which the nodejs is running by default in a direct way


