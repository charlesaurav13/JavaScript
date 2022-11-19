//Wrapping of data 
function person(_name,_age){
        var name = _name
        this.age = _age

        this.getpersonalinfo = ()=>{
            return name             //this is encapsulation ,name bariable cannot be accesed out side the class
        
        }
            
}

let per = new person("Saurav",25)
console.log(per.getpersonalinfo())