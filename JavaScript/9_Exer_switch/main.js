
let distance = prompt("Digite a quantidade de anos luz")

let menu = prompt(`
  opções para calculo: 
  1 - Parsec(pc)
  2 - Unidade Astronômica(AU)
  3 - Quilômetros
`)

let chosenUnity
let convertedDistance

switch (menu) {
  case "1":
    chosenUnity = "Parsec"
    convertedDistance = distance * 0.306601
    break;
  case "2":
    chosenUnity = "Unidade Astronômica"
    convertedDistance = distance * 63241.1
    break;
  case "3":
    chosenUnity = "Quilômetros"
    convertedDistance = distance * 9.5 * Math.pow(10,12) // 10 elevado a 12
    break;
  default:
    chosenUnity = "Unidade não identificada"
    convertedDistance = "Conversão fora do escopo"
    break;
}

alert(` Distâcia em anos luz ${distance} \n Unidade utilizada ${chosenUnity} \n Após a conversão ${convertedDistance}`)
