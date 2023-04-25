
let nome = window.prompt("Qual seu nome: ")
let cidadesVisitadas = []
let totalCidadesVisitadas = 0

while (true) {
    let resposta = confirm("Você já visitou alguma cidade ? ")

    if (resposta === true) {
        let cidade = prompt("Qual cidade você visitou: ")
        totalCidadesVisitadas += 1
        cidadesVisitadas.push(cidade)
    } else if (resposta === false) {
        break;
    } else {
        alert("Opção inválida")
    }
}

alert(`O turista ${nome}\nVisitou:\n${totalCidadesVisitadas}\nAs cidades visitadas foram ${cidadesVisitadas}`)
