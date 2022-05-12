
//1 pedir os dados da nave: Nome, quantidade de tripulantes

class SpaceShip {
  constructor(name, crewQuantity) {
    this.name = name
    this.crewQuantity = crewQuantity
  }
}

function newSpaceShip() {
  let shipName = prompt("Qual é o nome da nave ? ")
  let crewQuantity = prompt("Qual é o número de tripulantes ? ")
  let reponseUserJoin = new SpaceShip(shipName, crewQuantity)
  return reponseUserJoin
}

function showMenu() {
  let chosenOption
  while (chosenOption != '1' && chosenOption != '2' && chosenOption != '3') {
    chosenOption = prompt(`Seja bem vindo(a) ? \n 1 - Acelerar a nave \n 2 - Trocar a nave \n 3 - Imprimir e Sair`)
  }
  return chosenOption
}

let chosenOption

while (chosenOption != '3') {
  chosenOption = showMenu()
  switch (chosenOption) {
    case '1':

      break;
    case '2':

      break;
  }
}