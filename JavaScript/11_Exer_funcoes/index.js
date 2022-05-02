let nameShip = prompt("Qual é o nome da nave ?");
let velocity = 0;
let chosenOption;

function showMenu() {
  let option
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt(`O que deseja fazer ? \n 1 - Acelerar em 5km/s \n 2 - Desacelerar em 5km/s \n 3 - Imprimir dados de bordo \n 4 - Sair`)
  }
  return option;
}

do {
  chosenOption = showMenu()
  switch (chosenOption) {
    case "1":
      velocity = acelear(velocity);
      break;
    case "2":
      velocity = desacelerar(velocity);
      break;
    case "3":
      imprimir(nameShip, velocity);
      break;
    default:
      alert("Escolheu sair")
      break;
  }
} while (chosenOption != "4");

function acelear(velocity) {
  let newVelocity = velocity += 5;
  return newVelocity;
}

function desacelerar(velocity) {
  let newVelocity = velocity -= 5; 
  if (velocity <= 0) {
    newVelocity = 0
  }
  return velocity;
}

function imprimir(nameShip, velocity) {
  alert(`O nome da nave é ${nameShip} \n E a velocidade atual é ${velocity}`)
}
