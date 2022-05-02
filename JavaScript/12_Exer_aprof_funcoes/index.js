
function slowDown (velocity, printer) {
  let newVelocity = 20
  while (velocity > 0) {
    printer(velocity)
    velocity -= newVelocity
  }
  alert(`A nave está parada as comportas podem ser abertas.`)
}

let spaceShipVelocity = 150

slowDown(spaceShipVelocity, function (velocity) {
  alert(`Velocidade atual: ${velocity}`)
})