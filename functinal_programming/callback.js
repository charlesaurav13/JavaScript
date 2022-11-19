// In JavaScript, a callback function is a function that is passed into another
// function as an argument. This function can then be invoked at a later stage
// of time.
// Since, in JavaScript, functions are objects, functions can be passed as
//arguments
'use strict'
//example
let firstname = (a,cb)=>{
    console.log(a)
    cb("Saurav")
}
let lastname = (b)=>{
    console.log(b)
}
firstname("Charles",lastname)

//exaple 2 ,find the given number is even or not
const isEven=(a)=>{
    return a%2==0
}

const number=(num,numcall)=>{
    console.log(`The number ${num} is Even :${numcall(num)}`) //callback func,isEven is envoked here
}

number(19,isEven)