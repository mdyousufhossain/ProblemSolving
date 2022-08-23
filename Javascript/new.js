class Dog {
    constructor(name,age,gene){
        this.name = name
        this.age = age 
        this.gen = gene 
    }

    uppcaser(x){ 
        x.toUpperCase()
    }

    eat(){
        if(uppcaser(this.gen) == "ASIA"){
            console.log('eating shit')
        }
    }

    bark(){
        console.log('barking')
    }
}

const asianDog = new Dog('sherlina',6,'ASiA')

asianDog.eat()
asianDog.bark()

