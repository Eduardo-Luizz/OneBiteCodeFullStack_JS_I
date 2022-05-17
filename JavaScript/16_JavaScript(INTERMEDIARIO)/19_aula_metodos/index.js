//criar metodos na classe
class SpaceShip {
  constructor(name){
    this.name = name
    this.velocity = 0 // Neste caso por exemplo sem passar no construtor é por que, quero que todas as naves iniciem com velocity = 0
  }
  //método definido dentro da classe
  speedUp(acceleration){
    this.velocity += acceleration
  }
}

let artemis = new SpaceShip("Ártemis")
let others = new SpaceShip("The Most")

artemis.speedUp(10)
artemis.speedUp(15)

others.speedUp(1500)

console.log(artemis)
console.log(others)