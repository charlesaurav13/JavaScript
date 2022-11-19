const fs = require('fs')

console.log('First Line')

let data = fs.readFileSync('t1.txt')
console.log('The file value is ->'+ data)       //Reading file syncronously
console.log('Last Line')