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
      console.log("VELOCIDADE MÁXIMA ULTRAPASSADA !!\nDIMINUA OU PODERÁ CAUSAR DANOS A NAVE")
    }
  }
}

class TransportSpaceship extends SpaceShip {
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedVelocity) // chama o construtor da classe
    this.maxLoadWeight = maxLoadWeight
  }

  speedUp(acceleration){
    acceleration /= 2
    console.log("Incrementando velocidade em " + acceleration + "km/s")
    super.speedUp(acceleration)
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora",4,100,400)
console.log(transportSpaceship)

transportSpaceship.speedUp(210)