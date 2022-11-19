// those data types in which the values of it does not change ,i.e the values stored in it are immutable
// eg:int,float,boolean,null

let a = 10
let b = a
console.log(a)
b = 20
console.log(a)
console.log(b)
//here the value change of one variable does effect the value change of other variable

let obj = {
    name:'saurav',
    age:10
}
console.log(obj)

let obj1 = obj

obj1.name = 'sahil'
console.log(obj)
console.log(obj1)

obj1.name = 'nishant'
console.log(obj)
console.log(obj1)
//here the values get change for to both the objects 