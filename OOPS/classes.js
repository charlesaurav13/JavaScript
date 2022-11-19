//we can create class
//for example

class person{
    constructor(_name,_age){        //it is uesd to define the constructor
        this.name = _name
        this.age = _age
    }
    // we can create function ,without using this func
    display(){
        console.log(`Hello ${this.name}`)
    }
}
const person1 = new person("Charles",20)
const person2 = new person("Sahil",20)
console.log(person1)
console.log(person2)

person1.display()