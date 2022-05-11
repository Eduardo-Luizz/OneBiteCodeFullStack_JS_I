let spacialStation = { name: "The Boat", platformQuantity: 5 }
spacialStation.name = "The Reign"
console.log(spacialStation)

// =====================================================>

let spaceship = { name: "Golias", type: "Batalha" }
spaceship.crewQuantity = 5
spaceship["isHitched"] = true
console.log(spaceship)

// =====================================================>

let spaceship = { name: "Puller", type: "Extração" }
spaceship.crewQuantity = 10
spaceship.isHitched = true
spaceship = { }

// =====================================================>

let spaceship = { }
spaceship.name = "Ártemis"
spaceship.type = "Descoberta"
spaceship["crew quantity"] = 6
spaceship["isHitched"] = false