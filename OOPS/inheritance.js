// inherit the properties
class person{
    constructor(_name,_age){        
        this.name = _name
        this.age = _age
    }
    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}
class teacher extends person{
             constructor(_name,_age,_priorty){
             super(_name,_age) //it is use to extend the properties to chid class

                this.priorty = _priorty
             }
    //we can also inherit functions (methods from parent class)
    test(){
        super.welcome()
    }
}

class student extends person{
            constructor(_name,_age,_cgpa){
                super(_name,_age)
                this.cgpa = _cgpa
            }
            qualified(){
                if(this.cgpa>=8){
                    console.log(`Qualified:${true}`)
                }
            }

            test2(){
                super.welcome()     //Here we inherit the method
            }
}

let person1 = new person("Saurav",20)
console.log(person1)

let teacher1 = new teacher("inder",35,"High")
console.log(teacher1.priorty)
teacher1.test()

let student1 = new student("Sahil",20,8.3)
console.log(student1)
student1.qualified()
student1.test2()