//arrays are use to hold multiple data of any type
var arr =["array",true,false,12,80.67]
console.log(arr.length)
console.log(arr)
//Inbuilt js in arrays
//to pop out last element of array we use pop method
var a = arr.pop()
console.log("element removed from last",a)
console.log(arr)

arr.push("pushed")
console.log(arr)

var b = arr.shift()
console.log("element removed from first",b)
console.log(arr)

arr.unshift("added to first position")
console.log(arr)