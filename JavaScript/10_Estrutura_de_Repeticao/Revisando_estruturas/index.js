let nameShip = prompt("Digite o nome da nave").toLowerCase()

for (let i = 0; i < nameShip.length; i++) {
  if(nameShip[i] == charSub) {
    newName += charOption
  } else {
    newName += nameShip[i] 
  }
}