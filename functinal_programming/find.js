//find is use to find the first vale in the list
const salary = [1000,2000,6000,8000,10000]
let d = salary.find(a=>{return a <5000})
console.log(d)        //use to get the very first conditional value satisfied
let index = salary.findIndex(a=>{return a>2000})
console.log(index)  //use to get the index value of the very first conditonal value satisfied
