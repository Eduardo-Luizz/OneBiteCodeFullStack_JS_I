let spaceShip = {
  velocity: 0,
  speedUp: function (acceleration) {
    this.velocity += acceleration
  }
}

function registerSpaceShip() {
  spaceShip.name = prompt("Informe o nome da nave")
  spaceShip.type = prompt("Informe o tipo da nave")
  spaceShip.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
}

function acelerate() {
  let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
  spaceShip.speedUp(acceleration)
  if (spaceShip.velocity > spaceShip.maxVelocity) {
    alert(`VELOCIDADE MÁXIMA ULTRAPASSADA \n 
          Velocidade da nave: ${spaceShip.velocity} km/s \n
          Velocidade máxima da nave: ${spaceShip.maxVelocity} km/s
          `)
  }
}

function stop() {
  alert(`Nome: ${spaceShip.name} \n
        Tipo: ${spaceShip.type} \n
        Velocidade da nave: ${spaceShip.velocity} \n
        Máxima da nave ${spaceShip.maxVelocity}
  `)
  spaceShip.velocity = 0;
}

function showMenu() {
  let chosenOption
  do {
    chosenOption = prompt("Você deseja: \n 1 - Acelerar \n 2 - Parar")
    switch (chosenOption) {
      case "1":
        acelerate()
        break;
      case "2":
        stop()
        break;
      default:
        alert(`Invalid option`)
    }
  } while (chosenOption != "2")
}

registerSpaceShip()
showMenu()