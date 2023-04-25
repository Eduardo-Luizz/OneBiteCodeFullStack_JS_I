
const value = prompt("Qual o valor desejado para conversão(em metros): ")
const option = prompt("Qual para qual medida deseja efetuar a conversão: \n-mm\n-cm\n-dm\n-dam\n-hm\n-km")
var result

switch (option) {
    case "mm":
        result = value * 1000
        alert(`Valor digitado ${value} convertido para mm ${result}`)
        break;
    case "cm":
        result = value * 100
        alert(`Valor digitado ${value} convertido para cm ${result}`)
        break;
    case "dm":
        result = value * 10
        alert(`Valor digitado ${value} convertido para dm ${result}`)
        break;
    case "dam":
        result = value / 10
        alert(`Valor digitado ${value} convertido para dam ${result}`)
        break;
    case "hm":
        result = value / 100
        alert(`Valor digitado ${value} convertido para hm ${result}`)
        break;
    case "km":
        result = value / 1000
        alert(`Valor digitado ${value} convertido para km ${result}`)
        break;    
    default:
        alert("Opção inválida")
        break;
}