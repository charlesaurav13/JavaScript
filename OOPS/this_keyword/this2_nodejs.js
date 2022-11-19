'use strict'
//using strict mode

//1.using console.log()
console.log(this)       //{}

//2.inside a function
function display(){
    console.log(this) 
}
display()       //undefined

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
obj2.func2()        //undefined