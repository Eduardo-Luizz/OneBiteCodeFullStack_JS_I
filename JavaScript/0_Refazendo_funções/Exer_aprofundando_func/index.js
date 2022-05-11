
function slow(velocity, printer) {
  let decrementVelocity = 20
  while (velocity >= 0) {
    printer(velocity)
    velocity -= decrementVelocity
  }
}

let atualVelocity = 150

slow(atualVelocity, (velocity) => {
  console.log(`Velocidade atual: ${velocity}`)
})