//the process whereby the interpreter appears to move the declaration of functions, 
//variables or classes to the top of their scope, prior to execution of the code. 
//Hoisting allows functions to be safely used in code before they are declared.

var add = function(a,b){
    return a+b
}
console.log(add(5,8))