class SpaceShip {
  constructor(name, crewQuantity){
    this.name = name
    this.crewQuantity = crewQuantity
    this.hitched = false
    this.doorsOpen = false
  }

  hitch(){
    this.hitched = true
    this.doorsOpen = true
  }
}

function showMenu() {
  let chosenOption
  while (chosenOption != '1' && chosenOption != '2' && chosenOption != '3') {
    chosenOption = prompt(`O que deseja fazer ? \n 1 - Engatar nave \n 2 - Imprimir naves \n 3 - Sair do programa`)
  }
  return chosenOption
}

function createSapceShip() {
  let shipName = prompt("Qual é o nome da nave ? ")
  let crewQuantity = prompt("Qual é o número de tripulantes ? ")
  let reponseUserJoin = new SpaceShip(shipName, crewQuantity) // instanciou na classe
  return reponseUserJoin
}

function printSpaceShipList(hitchedSpaceShips) {
  let spaceShipList = ""
  hitchedSpaceShips.forEach((element, index) => {
    spaceShipList += (index + 1) + "- " + element.name + " (" + element.crewQuantity + " Tripulantes)\n"
  })
  alert(spaceShipList)
}

let chosenOption
let myArray = []

while (chosenOption != '3') {
  chosenOption = showMenu()
  switch (chosenOption) {
    case '1':
      let spaceShipToAdd = createSapceShip() // a return da function foi pra uma variável
      spaceShipToAdd.hitch()                 // Chamou o método instânciado na classe para setar como true os atributos que antes eram false
      myArray.push(spaceShipToAdd)           // Inseriu no array a nova nave engatada
      break;
    case '2':
      printSpaceShipList(myArray)
      break;
  }
}
