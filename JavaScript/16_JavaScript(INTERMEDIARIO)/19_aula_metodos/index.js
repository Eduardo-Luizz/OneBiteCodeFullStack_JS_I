//criar metodos na classe
class SpaceShip {
  constructor(name){
    this.name = name
    this.velocity = 0
  }
  //método definido dentro da classe
  speedUp(acceleration){
    this.velocity += acceleration
  }
}

let artemis = new SpaceShip("Ártemis")

artemis.speedUp(10)
artemis.speedUp(15)

console.log(artemis)
