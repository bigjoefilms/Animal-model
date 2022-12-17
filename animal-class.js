class animalKingdom {
    withBackbone = " They have back bone"
    withoutBackbone = " They don't have back bone"
    constructor(withBackbone,withoutBackbone){
        this.withBackbone = "WithBackbone"
        this.withoutBackbone = "WithoutBackbone"
    }

    coldBlood(){
        console.log("This animal is cold blood")
    }

    classification(){
        throw new Error("this cannot be implemented directly");
}

}
class Animalist  {

    constructor(class1,class2,class3,class4,class5,class6,){
        this.class1 =class1
        this.class2 = class2
        this.class3 = class3
        this.class4 = class4
        this.class5 = class5
        this.class6 = class6

    }

    addAnimal(class1){
        this.class1 = class1
    }
    
    getAnimal(){
    console.log(this.class1)
    }
  }

const animals = new Animalist("Fish" ,"Reptile","AVES","Mammals","Arthropoda","Amphibia")


class Anthropoda extends animalKingdom{
    constructor(withoutBackbone){
        super(withoutBackbone)
    }

    Type() {
        console.log(` Anthropoda : ${this.withoutBackbone}`);
      }

    classification(){
       console.log("Anthropoda don't have Backbone")
}

}
const anthropoda = new Anthropoda()

class Fish extends animalKingdom {
    constructor(withBackbone){
        super(withBackbone)
    }

    Type() {
        console.log(` Fish : ${this.withBackbone}`);
      }
    classification(){
        console.log("Fish  have Backbone")
 }

}
const fish = new Fish() 

class Amphibia extends animalKingdom{
    constructor(withBackbone){
        super(withBackbone)
    }

    Type() {
        console.log(` Amphibia : ${this.withBackbone}`);
      }

    classification(){
        console.log("Amphibia  have Backbone")
 }

}
const amphibia = new Amphibia

class Reptiles extends animalKingdom{
    constructor(withBackbone){
        super(withBackbone)
    }

    Type() {
        console.log(` Reptiles ${this.withBackbone}`);
      }

    classification(){
        console.log("Reptils  have Backbone")
 }

}
const reptiles = new Reptiles()


class AVES extends animalKingdom{

    constructor(withBackbone){
        super(withBackbone)
    }

    Type() {
        console.log(` AVES : ${this.withBackbone}`);
      }

    classification(){
        console.log("AVES don't Backbone")
 }

    #eats(){
        console.log("This animal eats Fish")
    }
    eatsWhat(){
        this.#eats()
    }

}
const aves = new AVES()

class Mammals extends animalKingdom{
    
    constructor(withBackbone){
        super(withBackbone)
    }

    Type() {
        console.log(` Mammals : ${this.withBackbone}`);
      }

    classification(){
        console.log("Mammals have Backbone")
 }

}
const mammals = new Mammals()


console.log('************** Classification of Animals ******************')

console.log("List of animal Classification " , animals)

console.log('************** Internal body Temperature ******************')
mammals.classification()
reptiles.classification()
aves.classification()
fish.classification()
amphibia.classification()
anthropoda.classification()

console.log('************** Animals with Backbone ******************')
mammals.Type()
reptiles.Type()
aves.Type()
fish.Type()
amphibia.Type()
console.log('************** Animals without Backbone ******************')
anthropoda.Type()
