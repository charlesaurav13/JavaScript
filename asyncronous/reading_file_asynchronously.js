const fs = require('fs')

console.log("First Line")

fs.readFile('t1.txt',cb1)       //callback function

function cb1(err,data){
    if(err){
        console.log(err)
    }
console.log('The data is ->'+ data)
}


fs.readFile('t2.txt',cb2)       //callback function

function cb2(err,data){
    if(err){
        console.log(err)
    }
console.log('The data is ->'+ data)
}

//Asynchronous behaviour is achieved here
console.log("Last line")

//Order of output here
// first line 
// last line 
// the data of file 1
// the data of file 2
//note the order of the execution of callback functions are random