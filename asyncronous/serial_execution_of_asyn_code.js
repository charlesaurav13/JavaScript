const fs = require('fs')
console.log('start')

fs.readFile('t1.txt',cb1)       //callback function

function cb1(err,data){
    if(err){
        console.log(err)
    }
        console.log('The data 1 is ->'+ data)
        fs.readFile('t2.txt',cb2)    //calling cb2 after cb1
}


function cb2(err,data){
    if(err){
        console.log(err)
    }
        console.log('The data 2 is ->'+ data)
        fs.readFile('t3.txt',cb3)       //reading cb3 after cb2
}




function cb3(err,data){
    if(err){
        console.log(err)
    }
console.log('The data 3 is ->'+ data)
}

console.log('end')