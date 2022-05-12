class TransportSpaceShip {
  constructor(name) {
    this.name = name
    this.currentVelocity = 0
  }

  set velocity(newVelocity){
    if (newVelocity > 120) {
      this.currentVelocity = 120
    } else {
      this.currentVelocity = newVelocity
    }
  }
}

let spaceShip = new TransportSpaceShip("Transportador")
spaceShip.velocity = 130

console.log(spaceShip)

class ResourceProcessStation {
  constructor(name, monthlyProcessedLoad) {
    this.name = name
    this.monthlyProcessedLoad = monthlyProcessedLoad
  }

  get weeklyProcessedLoad() {
    return this.monthlyProcessedLoad / 4
  }
}

let resourceProcessStation = new ResourceProcessStation("Gaia", 500)
console.log(resourceProcessStation.weeklyProcessedLoad) // 500 / 4

resourceProcessStation.monthlyProcessedLoad = 600
console.log(resourceProcessStation.weeklyProcessedLoad)