//wap to find the sum of every elements of array
//imperative way
const salary = [1000,2000,6000,8000,10000,-900]
let sum =0
for (let index = 0; index < salary.length; index++) {
    sum += salary[index]   
}
console.log(sum)

//declarative way
let result = salary.reduce((acc,val)=>{
    let updatedsum = acc+val
    return updatedsum
},0)

console.log(result)

let result2 = salary.reduce((acc,val)=>{
    let updatedProduct = acc*val
    return updatedProduct
},1)

console.log(result2)