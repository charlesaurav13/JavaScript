// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

let arr = ["hi","my" ,"name","is"]
// let a arr[l]
// let b[2]
// console.log(a)
// console. log(b)

//another way of doin this is
let [a,b,c,d] = arr
console.log(a)
console.log(b)
//this is called destructuring of arrays




//destructuring objects
var person1={
    firstname:"Charles",
    lastname:"Saurav",
    age : 20,
    interest : ["networks","web designing","hacking","machine learning"],
    address :{
        State : "Jharkhand",
        City : "Ranchi",
        pincode : 834003
    }
}

//To get the values we must always use the keys value only ,you can also use the alias name for it but you need keys
//objects descturing is done using curly braces
let{firstname:f,lastname:l,age:y,interest:[x],address:{State:s}}=person1
console.log(f)
console.log(l)
console.log(x)
console.log(s)

