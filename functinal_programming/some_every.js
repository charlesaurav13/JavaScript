//Some: Conditon Check: TO get true or false based on a condition
// It will return true if even 1 element satisfies the condition

const value =[100,200,-900,40,-20,98,-98]
let val = value.some(n=>{return n<0})
console.log(val)

//evry func checks for evry element to satisfy the condition
let val1 = value.every(n=>{return n<0}) //not every condition is satisfied
console.log(val1)       //false

let val2 = value.every(n=>{return n%2==0})      //every condition is satisfied
console.log(val2)           //true