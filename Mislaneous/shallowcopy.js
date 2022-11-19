// to make the refernce variable also immutable we use
//spread operator {...}
let obj = {
    name:'saurav',
    age:10
}
let obj1 = {...obj}

obj1.name = 'sahil'
console.log(obj)        //{ name: 'saurav', age: 10 }
console.log(obj1)       //{ name: 'sahil', age: 10 }

//But shallow copy fails in nested objects
let obj2 = {
    name:'saurav',
    age:10,
    address:{
        state:'jharkhand',
        city:'ranchi'
    }
}

let obj3 = {...obj2}
obj2.address.city = 'delhi'
console.log(obj2)
console.log(obj3)

//both will have same values
//to handle this we use deep copy
