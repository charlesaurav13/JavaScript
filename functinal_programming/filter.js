//to find the even numbers and get in the differnt array
//imperative way of writing the code
const arr = [1,23,24,12,89,90,45,36]
let arrmod = []
for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2==0) {
        arrmod.push(arr[index])
    }    
}
console.log(arrmod)

//declarative way ,using filter
// Filter Returns a new Array it will return all those elememts that matches the specific condition
//if condition is true it will return the element and if false it will be descarded
let evenNum = arr.filter(a=>{return a%2==0})
console.log(evenNum)
//just another example to find the total positive value in transactions
const transactions = [1000,-300,9000,-4000,10000,-3000,200,12000]
let positivetrans = transactions.filter(a=>{return a>0})
console.log(positivetrans)