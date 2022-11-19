// //application of closures
// function ad(x,y){
//     return x+y
// }
// let a = ad(2,3)
// console.log(a)


//lets now do this with currying
let funcurried = (x)=>{
    return function (y){
        console.log(x+y)
    }
}

let add = funcurried(3)
add(6)