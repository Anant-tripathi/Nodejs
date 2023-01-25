//CRUD - Create Read Update and Delete with File System
//
//Make file
//Read file
//Update file
//rename file
//delete file
//

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

/*fs.writeFileSync('test1.txt', 'this is a simple text file');
fs.readFile(filePath, 'utf8',(error, item) =>{
	console.log(item)
});

fs.appendFile(filePath, 'and file name is apple.txt', (error)=>{
	if(!error) console.log("file is updated");
});


fs.rename(filePath, `${dirPath}/fruit.txt`, (error)=>{
	if(!error) console.log("file name is updated");
});*/

fs.unlinkSync(`${dirPath}/fruit.txt`)
