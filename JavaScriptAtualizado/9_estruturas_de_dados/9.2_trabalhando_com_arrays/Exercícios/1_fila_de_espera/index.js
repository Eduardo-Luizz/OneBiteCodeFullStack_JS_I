
let pacientes = []
let opcao = ""

while (opcao !== "3") {

    let resultado = ""
    for (let i = 0; i < pacientes.length; i++) {
        resultado += `${i + 1}º ${pacientes[i]}\n`
    }
    
    opcao = prompt(`Pacientes:\n${resultado}\nEscolha uma opção:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair`);

    switch (opcao) {
        case "1":
            novo_paciente = prompt("Digite o nome do novo paciente: ")
            pacientes.push(novo_paciente)
            break;
        case "2":
            const paciente_consultado = pacientes.shift()
            if (!paciente_consultado) {
                alert("Não há pacientes na fila!")
            } else {
                alert(`O paciente consultado foi ${paciente_consultado} e foi removida da fila`)
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
