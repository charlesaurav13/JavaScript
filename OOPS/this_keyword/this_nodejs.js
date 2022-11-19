// "This" keyword refers to an object that is executing the current piece of
// code. It references the object that is executing the current function. If the
// function being referenced is a regular function, "this" references the global
// object. If the function that is being referenced is a method in an object,
// "this" references the object itself.

//not using strict mode

//1.using console.log()
console.log(this)       //{}

//2.inside a function
function display(){
    // console.log(this)  
}
display()       //global object

//3.object-function
let obj = {
    name :"Saurav",
    age :20,
    gender :"M",
    func:function display1(){
        console.log(this)           //here this is calling the object itself
        console.log(this.name)      
    }

}
obj.func()

//4.object-func-func
let obj2 = {
    name :"Saurav",
    age :20,
    gender :"M",
    func2:function display(){
            function display2(){
                     console.log(this)
        }
        display2()
    }

}
obj2.func2()        //it also returns the global function