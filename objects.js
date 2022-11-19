//onjects are just key value pairs ,you can store anything here
var person1={
    firstname:"Charles",
    lastname:"Saurav",
    age : 20,
    interest : ["networks","web designing","hacking","machine learning"],
    address :{
        State : "Jharkhand",
        City : "Ranchi",
        pincode : 834003
    }
}

console.log(person1.interest[1]) //output by dot notation
console.log(person1["age"]) // 20
console.log(person1.address.City)
console.log(person1.address)

delete person1.age          //delete an key value pair

console.log(person1)
person1.job = false         //add an key value pair
console.log(person1)