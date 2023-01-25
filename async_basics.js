//in synchronous, operations tasks are performed one at a time
//
//in asynchronous, second task does not wait for the first task to finish
//

console.log("start exe...")
setTimeout(()=>{
console.log("logic exe...")
}, 2000)
console.log("complete exe...")

// DRAWBACKS

let a=10;
let b=0;

setTimeout(()=>{
	b=20;
},2000);

console.log(a+b);
//the value that is being updated does not contribute to the output as the program does not
//wait for processing to finish leading to a wrong output
// === === === === === === === === === === === === === ===
//HANDLE ASYNCHRONOUS DATA IN NODE.JS


let c=20;
let d=0;

let waitingData = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve(30);
	},2000);	
});

waitingData.then((data)=>{
	d=data;
	console.log(c+d);
});

console.log(c+d);
//there are two ways to overcome this problem, PROMISES and ASYNC_AWAIT
// A javascript promise object contains both the producing code and calls to the consuming code.


