class Captain {
  constructor(name, age, flightHours) {
    this.name = name
    this.age = age
    this.flightHours = flightHours
  }
}

class SpaceShip {
  constructor(name, crewQuantity, captainName, captainAge, captainFlightHours){
    this.name = name
    this.crewQuantity = crewQuantity
    this.captain = new Captain(captainName, captainAge, captainFlightHours)
  }
}

let spaceShip = new SpaceShip("Ártemis", 13, "Will Grey", 45, 15000)

console.log(spaceShip)