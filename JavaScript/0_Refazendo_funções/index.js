let spaceShipName = prompt("Qual é o nome da nave ? ")

function showMenu() {
  let chosenOption
  while (chosenOption != '1' && chosenOption != '2' && chosenOption != '3' && chosenOption != '4') {
    chosenOption = prompt(`O que deseja fazer ? \n 1 - Acelerar em 5km/s \n 2 - Desacelerar em 5km/s \n 3 - Imprimir dados de bordo \n 4 - Sair do programa`)
  }
  return chosenOption
}

let chosenOption2

let velocity = 0
let acceleration = 5
let totalVelocity = 0

while (chosenOption2 != '4') {
  chosenOption2 = showMenu()
  switch (chosenOption2) {
    case '1':
      acelerate(velocity,acceleration)
      break;
    case '2':
      slow(velocity, acceleration)
      break;
    case '3':
      alert(`O nome da nave é ${spaceShipName} \n e a velocidade atual é ${totalVelocity}`)
      break;
  }
}

function acelerate(velocity, acceleration) {
  totalVelocity += velocity + acceleration
  console.log(totalVelocity)
  return totalVelocity
}

function slow(velocity, acceleration) {
  totalVelocity -= velocity + acceleration
  if (totalVelocity <= 0) {
    alert("Você está a 0 km/s, não pode desacelerar mais")
    totalVelocity = 0
  }
  console.log(totalVelocity)
  return totalVelocity
}
