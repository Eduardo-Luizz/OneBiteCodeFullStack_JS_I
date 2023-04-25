
do {
    alert('Menu iterativo:\n1-Aumentar\n2-Diminuir\n3-Multiplicar\n4-Dividir\n5-Encerrar')
    let option = prompt("Qual a sua escolha: ")

    if (option === "5") {
        alert("Programa encerrado")
        break;
    } else if (option === "4") {
        alert("Opção escolhida = 4-Dividir")
    } else if (option === "3") {
        alert("Opção escolhida = 3-Multiplicar")
    } else if (option === "2") {
        alert("Opção escolhida = 2-Diminuir")
    } else if (option === "1") {
        alert("Opção escolhida = 1-Aumentar")
    } else {
        alert("Opção inválida")
    }
} while (true);