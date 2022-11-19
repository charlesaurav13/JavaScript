//Poly means different ,morphs means forms

class animal{

    sound(){
        console.log("Different sound")
    }
}


class dog{

    sound(){
        console.log("Dogs barks")
    }
}


class cat{

    sound(){
        console.log("Cats mews")
    }
}
let animal1 = new animal
let dog1 = new dog
let cat1 = new cat
animal1.sound()
cat1.sound()
dog1.sound()


