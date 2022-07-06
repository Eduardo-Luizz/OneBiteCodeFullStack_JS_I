
class App {
  constructor(){
    this.spaceShip = null
  }

  start() {
    this.enrollSpaceShip()
    let chosenOption
    do {
      chosenOption = this.showInitialMenu()
      this.redirectFeature(chosenOption)
    } while (chosenOption != "3")
      this.printAndExit()
  }

  enrollSpaceShip() {
    let spaceShipName = prompt("Qual o nome da nave ?")
    let crewQuantity = prompt("Qual a quantidade de tripulantes ?")
    let spaceShipKind = this.askForSpaceShipKind()
    if (spaceShipKind == "1") {
      let weaponsQuantity = prompt("Quantas armas a nave possui ?")
      this.spaceShip = new BattleSpaceShip(spaceShipName, crewQuantity, weaponsQuantity)
    } else {
      let sitsQuantity = prompt("Quantas armas a nave possui ?")
      this.spaceShip = new TransportSpaceShip(spaceShipName, crewQuantity, sitsQuantity)
    }
  }

  askForSpaceShipKind(){
    let chosenOption
    while (!["1","2"].includes(chosenOption)) {
      chosenOption = prompt("Qual o tipo da nave? \n1-Batalha\n2-Transporte")
    }
    return chosenOption
  }

  showInitialMenu(){
    const promptMessage = `O que deseja fazer? \n
                           1 - Acelerar a nave \n
                           2 - Trocar a nave \n
                           3 - Imprimir e sair`
    let chosenOption = prompt(promptMessage)
    while (!["1","2","3"].includes(chosenOption)) {
      chosenOption = prompt(promptMessage)
    }
    return chosenOption
  }

  redirectFeature(chosenOption) {
    switch (chosenOption) {
      case "1":
        this.accelerateSpaceShip()
        break;
      case "2":
        this.enrollSpaceShip()
        break;
      default:
        break;
    }
  }

  accelerateSpaceShip() {
    let acceleration = Number(prompt("Quanto gostaria de acelerar ? "))
    this.spaceShip.speedUp(acceleration)
  }

  printAndExit() {
    let finalMessage = `Nome ${this.spaceShip.name} \n
                        Quantidade de tripulantes ${this.spaceShip.crewQuantity} \n
                        Velocidade Atual ${this.spaceShip.currentVelocity} \n `
    alert(finalMessage)
  }
}