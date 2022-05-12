class SpaceShip {

  static get decelerationRate(){
    return 0.15
  }

  constructor(name){
    this.name = name
    this.currentVelocity = 0
  }

  speedUp(acceleration) {
    this.currentVelocity += (acceleration * (1 - SpaceShip.decelerationRate))
  }
}

let spaceShip = new SpaceShip("Apolo")
spaceShip.speedUp(100)

console.log(spaceShip)