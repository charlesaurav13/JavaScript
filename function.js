swap(78,90)

function swap(a,b){
    var c = a
    a = b
    b = c
    console.log(a)
    console.log(b)
}

swap(11,19)


//Functions as expression 
var a = function(a,b){
    return a+b
}
console.log(a(9,8))



