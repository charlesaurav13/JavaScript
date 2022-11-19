function person(_name,_age){
     this.name = _name
    this.age = _age

    person.prototype.getpersonalinfo = ()=>{               //prototype demonstration
        console.log(`I am ${this.name} and my age is ${this.age}`)                
    }
        
}

let per = new person("Saurav",25)
let per1 = new person("Saura",20)
console.log(per)
// console.log(per.getpersonalinfo())
console.log(per1)

//here we were getting two functions for two objects which violtaes dry rule


//now after using the prototype,the getpersoal info will get linked to the object 