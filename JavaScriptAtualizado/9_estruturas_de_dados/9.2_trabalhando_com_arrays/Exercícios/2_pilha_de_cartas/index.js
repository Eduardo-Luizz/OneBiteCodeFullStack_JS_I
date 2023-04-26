
let cartas = []
let opcao = ""

while (opcao !== "3") {

    let resultado = ""
    for (let i = 0; i < cartas.length; i++) {
        resultado += `${i + 1}º ${cartas[i]}\n`
    }
    
    opcao = prompt(`${resultado}\nEscolha uma opção:\n1 - Nova carta\n2 - Puxar carta\n3 - Sair`);

    switch (opcao) {
        case "1":
            nova_carta = prompt("Digite a nova carta: ")
            cartas.push(nova_carta)
            break;
        case "2":
            const carta_puxada = cartas.pop()
            if (!carta_puxada) {
                alert("Não há nenhuma carta no baralho!")
            } else {
                alert("Você puxou um(a) " + carta_puxada)
            }
            break;
        case "3":
            alert("Saindo do menu")
            break;
        default:
            alert("Opção inválida")
            break;
    }
}

