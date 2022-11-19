let obj = {
    name:'saurav',
    age:10,
    address:{
        state:'jharkhand',
        city:'ranchi'
    }
}
let obj1 = JSON.parse(JSON.stringify(obj))      //it will initiate deep copy
obj.address.city = 'delhi'
console.log(obj)
console.log(obj1)