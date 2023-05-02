
let total_de_vagas = []

function executar() {

    let opcao = ""

    while (opcao !== "6") {

        opcao = exibir_menu()

        switch (opcao) {
            case "1":
                listarVagas()
                break;
            case "2":
                criarVaga()
                break;
            case "3":
                exibir_vaga()
                break;
            case "4":
                adicionarCandidato()
                break;
            case "5":
                excluir_vaga()
                break;
            case "6":
                alert("Saindo do menu")
                break;
            default:
                alert("Opção inválida")
                break;
        }
    }


}

executar()

function criarVaga() {
    const nome = prompt("Qual é o nome para a vaga: ")
    const descricao = prompt("Digite uma descrição referente a vaga: ")
    const data_limite = prompt("Digite a data limite para a vaga: ")
    const confirmacao = confirm(`Deseja salvar a vaga:Nome: ${nome}\nDescrição: ${descricao}\nData limite: ${data_limite}`)
    if (confirmacao) {
        const vaga = {
            nome,
            descricao,
            data_limite,
            candidatos: []
        }
        total_de_vagas.push(vaga)
        alert(`Vaga ${nome} criada com sucesso!`)
    }
}

function listarVagas() {
    let resultado = ""
    if (total_de_vagas.length === 0) {
        alert("Não existe vagas a serem exibidas !!")
    } else {
        total_de_vagas.forEach(function (vaga, indice) {
            resultado += `Id: ${indice + 1}\nNome da vaga: ${vaga.nome}\nDescrição da vaga: ${vaga.descricao}\nData limite da caga: ${vaga.data_limite}\nQuantidade de candidatos inscritos:${vaga.candidatos.length}\n\n`
        })
        alert(`Lista de vagas:\n${resultado}`)
    }
}

function adicionarCandidato() {
    if (total_de_vagas.length === 0) {
        alert("Não há vagas disponíveis para se inscrever!")
        return
    }
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = total_de_vagas[indice - 1]
    const confirmacao = confirm(`Deseja inscrever o candidato: ${candidato} na vaga ${indice} ?\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\n Data limite: ${vaga.data_limite}`)
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada")
    }
}

function exibir_menu() {
    const opcao = prompt(`Escolha uma opção:\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair`);
    return opcao
}

function exibir_vaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = total_de_vagas[indice - 1]
    if (vaga) {
        let candidatosEmTexto = ""
        if (vaga.candidatos.length > 0) {
            candidatosEmTexto = "\nCandidatos inscritos: "
            candidatosEmTexto += vaga.candidatos.join(", ")
        }

        alert(
            `Índice: ${indice}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.data_limite}\nQuantidade de candidatos: ${vaga.candidatos.length}${candidatosEmTexto}`
        )
    } else {
        alert("Vaga não encontrada")
    }
}

function excluir_vaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    if (total_de_vagas.length === 0) {
        alert("Não existem vagas cadastradas para excluir.")
    } else if (indice < 1 || indice > total_de_vagas.length) {
        alert("Índice inválido.")
    } else {
        const vagaExcluida = total_de_vagas.splice(indice - 1, 1)[0]
        alert(`Vaga ${vagaExcluida.nome} excluída com sucesso.`)
    }
}