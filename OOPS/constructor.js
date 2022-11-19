//it is a template to create multiple objects
// for example if we want to achieve something like car={name:"x4",company:"BMW",color:"red"},and many more we can,do this by


function createCar(_name,_company,_color){
    this.name = _name           //note here name here ,is the key of the object
    this.company = _company
    this.color = _color

    this.drive = ()=>{
        console.log(`I am driving ${this.name},which is of ${this.color} color`)
    }
}
let car1 = new createCar("X4","BMW","Black") //we use new keyword
let car2 = new createCar("S-class","Mercedes","White")


// console.log(car1)
// console.log(car2)
car2.drive()
