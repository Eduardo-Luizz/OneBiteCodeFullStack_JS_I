class SpaceShip {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity) {
      console.log("VELOCIDADE MÁXIMA ULTRAPASSADA !! \n DIMINUA OU PODERÁ CAUSAR DANOS A NAVE")
    }
  }
}

class TransportSpaceship extends SpaceShip {
  speedUp() {
    console.log("Naves de transporte só aumenta a velocidade em 1 km/s")
    this.currentVelocity += 1
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 40)
transportSpaceship.speedUp()

console.log(transportSpaceship)
