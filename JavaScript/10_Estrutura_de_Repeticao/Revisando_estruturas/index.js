let nameShip = prompt('Qual é o nome da nave?').toLowerCase()
let invertedName = "";

for(let i = nameShip.length - 1; i >= 0; i--){
  if(nameShip[i] == 'e'){
    break;
  }
  invertedName += nameShip[i];
}

alert(`Nome da nave original ${nameShip} \n Nome da nave invertido e após ocultação de e ${invertedName}`)