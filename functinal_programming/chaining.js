//using one func into another is chaining
const obj = [{Name:"A",age:12,gender:"F"},
            {Name:"B",age:22,gender:"F"},
            {Name:"C",age:32,gender:"F"},
            {Name:"D",age:42,gender:"M"},
            {Name:"E",age:52,gender:"F"},
            {Name:"F",age:28,gender:"M"},
            {Name:"G",age:22,gender:"F"}]
//common way
// let females =obj.filter(a=>{return a.gender=="F"})
// console.log(females)
// let femaleages = females.map(a=>{return a.age})
// console.log(femaleages)

//effective way

let ageofemale = obj.filter(a=>{return a.gender=="F"}).map(a=>{return a.age})
console.log(ageofemale)

//another example
// find the sum of odd numbers in the array
const arr =[1,2,3,4,5,6,7,8,9,11,13,24,15,17]
let sumofodd = arr.filter(a=>{return a%2!=0}).reduce((acc,val)=>{
    let odd = acc+val
    return odd
},0)
console.log(sumofodd)
