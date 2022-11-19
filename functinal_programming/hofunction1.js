//A higher-Order function contains one or more functions as an argument and returns the function as a result. 
//find the square of the list

// console.log(`Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them. In simple words,
// A Higher-Order function is a function that receives a function as an
// argument or returns the function as output.`)

const arr =[1,2,3,4,5]
let sqaured = [];
for(let i=0;i<arr.length;i++){
    sqaured.push(arr[i]*arr[i])
}
console.log(sqaured)
//the above is the primitive way of writing the code
//now we use map function in js to write the same code

let square2 =arr.map((n)=>{return n*n}) 
console.log(square2)
//map function iterates through the array and return a function with the values
//it returns again a array of values


//another way of doing it is using foreach func
//the main diff between both two is foreach doesnt return a array of values

let square3 = arr.forEach((n)=>console.log(n*n))
