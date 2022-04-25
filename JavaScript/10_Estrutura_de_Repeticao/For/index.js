let nameShip = prompt("Digite o nome da nave").toLowerCase()
let charSub = prompt("Qual caractere deseja substituir").toLowerCase()
let charOption = prompt("Por qual caractere deseja substituir").toLocaleLowerCase()
let newName = ""

for (let i = 0; i < nameShip.length; i++) {
  if(nameShip[i] == charSub) {
    newName += charOption
  } else {
    newName += nameShip[i] 
  }
}

alert(`O antigo nome era: ${nameShip} \n Após a alteração ficou: ${newName}`)