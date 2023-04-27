let total_imoveis = []
let opcao = ""

while (opcao !== "3") {

    let imovel = {}

    opcao = prompt(`Total de imóveis:\n${total_imoveis.length}\nEscolha uma opção:\n1 - Novo imóvel\n2 - Mostrar todos os imóveis\n3 - Sair`);

    switch (opcao) {
        case "1":
            imovel.proprietario = prompt("Digite o nome do proprietário: ")
            imovel.qtd_quartos = prompt("Digite a quantidade de quartos: ")
            imovel.qtd_banheiros = prompt("Digite a quantidade de banheiros: ")
            imovel.garagem = confirm("Possuí garagem ?")

            const confirma = confirm(
                `Deseja salvar este imóvel ?\nNome do proprietário: ${imovel.proprietario}\nNúmero de quartos: ${imovel.qtd_quartos}\nNúmero de banheiros: ${imovel.qtd_banheiros}\nPossuí garagem: ${imovel.garagem === true ? "Sim" : "Não"}`)

            if (confirma) {
                total_imoveis.push(imovel)
            }

            break;
        case "2":

            let resultado = ""

            if (total_imoveis.length === 0) {
                alert("Não há imóveis")
            } else {
                for (let objeto_imovel of total_imoveis) {
                    resultado += `Proprietário: ${objeto_imovel.proprietario}\nTotal de quartos: ${objeto_imovel.qtd_quartos}\nTotal de banheiros: ${objeto_imovel.qtd_banheiros}\nGaragem: ${objeto_imovel.garagem === true ? "Sim" : "Não"}\n\n`
                }
                alert(resultado)
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
