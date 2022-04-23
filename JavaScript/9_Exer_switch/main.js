
let distance = prompt("Digite a quantidade de anos luz")

let menu = prompt(`
  opções para calculo: 
  1 - Parsec(pc)
  2 - Unidade Astronômica(AU)
  3 - Quilômetros
`)

let parsec = (distance / 3.262).toFixed(5)
let au = (distance * 63241).toFixed(1)
let km = (distance * 9.461e+12)

switch (menu) {
  case "1":
    alert(`Unidade utilizada =  Parsec(pc) \n O valor em anos luz ${distance} convertido para Parsec é ${parsec}`)
    break;
  case "2":
    alert(`Unidade utilizada = Unidade Astronômica(AU) \n O valor em anos luz ${distance} convertido para AU é ${au}`)
    break;
  case "3":
    alert(`Unidade utilizada = Quilômetros (km)) \n O valor em anos luz ${distance} convertido para km é ${km}`)
    break;
  default:
    break;
}
