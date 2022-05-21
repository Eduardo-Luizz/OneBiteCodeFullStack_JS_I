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

class BattleSpaceship extends SpaceShip { //Tudo o que está sendo usado na classe SpaceShip por causa de extends herda de SpaceShip
  stop() {
    this.currentVelocity = 0
   console.log("Recolhendo armas e parando a nave")
  }
}

class DiscoverySpaceship extends SpaceShip {
  stop() {
    this.currentVelocity = 0
    console.log("Recolhendo equipamento de amostras e parando a nave de descoberta")
  }
}

let darwin = new DiscoverySpaceship("Darwin",10,200) // name, maxCrew, maxRecommendedVelocity
let fenix = new BattleSpaceship("Fenix", 8, 240)

console.log(darwin)
console.log(fenix)

darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()