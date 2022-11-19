// In JavaScript, the for-in loop allows you to loop through the properties of an object.
// The statements of code found within the loop body will be executed once for each property of the object.

var person1 = {
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

for(var per in person1){
    console.log(per + "->" +person1[per])
}

//note arrays are objects in javascript
var arr = ["hey",true,12,90.67,false]
for(var a in arr){
    console.log(a +" ->",arr[a])
}