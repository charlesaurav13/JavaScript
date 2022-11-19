// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function.

function fun(){
    let x = 2
    function fun2(){
        console.log(x)
    }
    return fun2
}
//fun2 will always have access to outside values of fun()
let m = fun() 
m()     //lexial approch
// 2


//nested closure function
function profile(){
    let na = 'Saurav'


            function in_name(){
                let age = 20
                console.log('Hi '+na)

                        function in_in_name(){
                            console.log(age+' here we can also access name '+na)
                        }
                return in_in_name
            }
        return in_name

}

let n = profile()
// n()

let n1 = n()
n1()  

//the above shown is called nested closure