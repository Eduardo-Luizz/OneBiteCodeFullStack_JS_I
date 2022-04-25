let name = prompt("Digite o nome da nave")

let option = prompt(`Deseja entrar em dobra espacial ? \n 1-Sim \n 2-Não`)
let quantidadeDobras = 0
if (option == 1) {
  while (option == "1") {
    option = prompt(`Deseja realizar outra dobra espacial ? \n 1-Sim \n 2-Não`)
    quantidadeDobras += 1;
  }
}
alert(`O nome da nave é: ${name} \n A quantidade de dobras foi: ${quantidadeDobras}`)