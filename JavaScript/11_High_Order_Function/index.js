function doubleVelocity(velocity,printer) {
  console.log("Entrei em double velocity")
  let newVelocity = velocity * 2

  // O parâmetro printer é uma função
  printer(newVelocity)
  return newVelocity
}

let printVelocity = velocity => {
  console.log(`Nova velocidade: ${velocity}`)
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)