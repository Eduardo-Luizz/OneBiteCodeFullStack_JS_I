//Classe nave espacial
class SpaceShip {
  constructor(name, crewQuantity){
    this.name = name
    this.crewQuantity = crewQuantity
    this.currentVelocity = 0
  }
}

//Classe nave de batalha
class SpaceShipBattle extends SpaceShip {
  constructor(name, crewQuantity, quantityWeapons){
    super(name, crewQuantity)
    this.quantityWeapons = quantityWeapons
  }
}

//Classe nave de transporte
class SpaceShipTransport extends SpaceShip {
  constructor(name, crewQuantity, sitsQuantity){
    super(name, crewQuantity)
    this.sitsQuantity = sitsQuantity
  }
}

// Logo que o sistema for iniciado pedir os dados da nave
function dataSpaceShip() {
  let shipName = prompt("Qual é o nome da nave ?")
  let shipCrewQuantity = Number(prompt("Qual é a quantidade de tripulantes ?"))
  let shipType = Number(prompt(`Qual é o tipo da nave: \n [1] - Batalha \n [2] - Transporte`))
  if (shipType == 1) {
    let weaponsQuantity = Number(prompt("Quantas armas a nave possuí ?"))
    let newInstanceSpaceShip = new SpaceShipBattle(shipName, shipCrewQuantity, weaponsQuantity)
    return newInstanceSpaceShip
  } else if (shipType == 2) {
    let crewQuantity = Number(prompt("Quantos assentos a nave possuí ?"))
    let newInstanceSpaceShip = new SpaceShipTransport(shipName, shipCrewQuantity, crewQuantity)
    return newInstanceSpaceShip
  } else {
    alert("Invalid option")
  }
  return newInstanceSpaceShip
}

//Chamando a função que pede os dados
dataSpaceShip()

//Função acelerar
function acelerate() {
  let aceleration = Number(prompt("Qual a velocidade desejada para aceleração: "))
  console.log(aceleration)
}

// Mostrar menu
let option

function showMenu() {
  let opcaoEscolhida = prompt(`Seja vem vindo! O que deseja fazer: \n 1 - Acelerar a nave \n 2 - Trocar a nave \n 3 - Sair do programa e imprimir`)
  option = opcaoEscolhida
  return opcaoEscolhida
}

while (option != "3") {
  showMenu()
  switch (option) {
    case "1":
      acelerate()
      break;
    case "2":

      break;
    default:
      alert(`Nome`)
      break;
  }
}