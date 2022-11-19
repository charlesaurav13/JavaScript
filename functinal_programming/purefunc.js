// console.log(`A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
// It does not depend on any state or data change during a program’s execution. 
// Rather, it only depends on its input arguments.`)

//example of impure function
let x = 5
let impure =(a)=>{
    console.log(x+a)
    x++
}

//it returns different output for the same inputs
impure(2) //7
impure(2)  //8
impure(2)   //9

//now lets look at another example
let partialpure=(a,x)=>{
    console.log(a+x)
}

//this is also impure because it uses external resources like console
partialpure(3,8)


let Pure=(a,x)=>{
    return a+x
}
console.log(Pure(31,8))
console.log(Pure(31,8))
//this is exaple of a pure function ,no external factor and no external resources used
