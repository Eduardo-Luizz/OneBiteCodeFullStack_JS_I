class SpaceShip {
  constructor(name, qtdTrip) {
    this.name = name
    this.qtdTrip = qtdTrip
    this.engat = false
    this.portas = false
  }

  engatarNave() {
    this.engat = true
    this.portas = true
  }
}

//Armazenando as naves no array
let arraySpaceShips = []
//Armazenando a escolha do user
let option

// Criando menu do user
while (option != "3") {
  showMenu()
  switch (option) {
    case "1":
      option1()
      break;
    case "2":
      option2()
      break;
    default:
      break;
  }
}

function showMenu() {
  let opcaoEscolhida = prompt(`Seja vem vindo! O que deseja fazer: \n 1 - Realizar engate \n 2 - Imprimir naves \n 3 - Sair do programa`)
  option = opcaoEscolhida
  return opcaoEscolhida
}

function option1() {
  let newSpaceShipName = prompt("Qual é o nome da espaço nave?") // Pedindo o novo nome da nave
  let newSpaceShipCrewQuantity = Number(prompt("Qual é o número de tripulantes?")) // Pedindo o novo quantidade de tripulantes
  let newInstanceShipName = new SpaceShip(newSpaceShipName, newSpaceShipCrewQuantity) // Instanciando na classe
  newInstanceShipName.engatarNave()  //Chamando o metodo que muda as propriedades de engate
  arraySpaceShips.push(newInstanceShipName) //Adicionando no array
  return newInstanceShipName
}

function option2() {
  //Iterando no array de objetos e mostrando
  arraySpaceShips.forEach(arraySpaceShips => {
    alert(`Nave: ${arraySpaceShips.name} \n Quantidade de tripulantes ${arraySpaceShips.qtdTrip} \n Engatada: ${arraySpaceShips.engat} \n Portas abertas: ${arraySpaceShips.portas}`)
  })
}