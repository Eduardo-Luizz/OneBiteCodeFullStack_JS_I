
do {
    let total_dinheiro = prompt("Qual o valor de dinheiro disponível: ")
    total_dinheiro = parseFloat(total_dinheiro)
    alert(
        `Total de dinheiro: ${total_dinheiro}\nMenu iterativo:\n1-Adiconar\n2-Remover\n3-Sair`)
    let option = prompt("Qual a sua escolha: ")

    if (option === "3") {
        break;
    }  else if (option === "2") {
        let remover = prompt("Quanto você deseja remover: ")
        remover = parseFloat(remover)
        alert(`Valor inicial = ${total_dinheiro}\nValor a ser retirado = ${remover}\nTotal = ${total_dinheiro - remover}`)
    } else if (option === "1") {
        let adicionar = prompt("Quanto você deseja adiconar: ")
        adicionar = parseFloat(adicionar)
        alert(`Valor inicial = ${total_dinheiro}\nValor a ser adicionado = ${adicionar}\nTotal = ${total_dinheiro + adicionar}`)
    } else {
        alert("Opção inválida")
    }
} while (true);