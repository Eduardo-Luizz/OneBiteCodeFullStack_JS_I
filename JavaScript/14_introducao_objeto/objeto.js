let spaceship = {
  name: "Deméter",
  type: "Extração",
  maxCrew: 20,
  turnOn: function() {
    console.log("Preparando propulsão")
    console.log("Ligando computador de bordo")
  }
}

// Chamando a funcao 
spaceship.turnOn()

// Adicionando
spaceship.velocity = 0
spaceship.sppedUp = function(aceleration) {
  this.velocity += aceleration
}

console.log(spaceship)
spaceship.sppedUp(10)
console.log(spaceship)