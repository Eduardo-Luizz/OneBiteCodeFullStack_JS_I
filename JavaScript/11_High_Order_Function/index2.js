function doubleVelocity(velocity,printer) {
  console.log("Entrei em double velocity")
  let newVelocity = velocity * 2

  // O parâmetro printer é uma função
  printer(newVelocity)
  return newVelocity
}

// a arraow function e um parametro
let anotherVelocity = doubleVelocity(50, (velocity) => {
  console.log("Outra velocidade" + velocity)
})