let obj = {
    firstname : "Charles",
    lastname  : "Saurav",
    age : 20,
    display:function(){
        console.log(`Hello ${this.firstname} ${this.lastname}
And my age is ${this.age}`)

}
}

let something = function(state,city){
    console.log(`Hello ${this.firstname} ${this.lastname}
And my age is ${this.age} ${state} ${city}`)

}
//we can apply this function to all the objects 
let obj1 = {
    firstname : "Harrison",
    lastname  : "Wells",
    age : 25
}


obj.display.call(obj1)  //here we can borrow the function of a object into the other object
something.call(obj1,"assam","ranchi")    //accessing a outsider function 
something.apply(obj,["assam","ranchi"])  //same as call but here the data is passed in array

//bind method is used to bind the functions and use it later
let compile = something.bind(obj1,"assam","ranchi") 
console.log(compile)
compile()