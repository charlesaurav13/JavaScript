// The for of statement creates a loop iterating over iterable objects,
// including: built-in String,Array, array-like objects like NodeList and also map and set
// var scores —


var scores = [50,70,78,90]
for(var s of scores){
    console.log(s)
}

//to get the index value of the values we use entries() func 

var colors = ["red","green","white","orange","grey"]
for(var [index,color] of colors.entries()){
    console.log(index + "->",color)
}

//string
var ch = "hello"
for(var s of ch){
    console.log(s)
}