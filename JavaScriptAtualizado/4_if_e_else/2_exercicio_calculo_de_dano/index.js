
nome1 = window.prompt('Digite o nome do personagem atacante: ')
ataque1 = window.prompt(`Digite o poder de ataque do ${nome1}: `)

nome2 = window.prompt('Digite o nome do personagem defensor: ')
pontos_de_vida = window.prompt('Digite o total de pontos de vida do personagem defensor: ')
poder_de_defesa = window.prompt('Digite o total de pontos de defesa do personagem defensor: ')
escudo = window.confirm('O personagem defensor possuí escudo? ')

valor_ataque_1 = parseFloat(ataque1)
valor_pontos_de_vida_2 = parseFloat(pontos_de_vida)
valor_pontos_de_defesa_2 = parseFloat(poder_de_defesa)

if (valor_ataque_1 > valor_pontos_de_defesa_2 && escudo === false) {
    total_de_dano = (valor_ataque_1 - valor_pontos_de_defesa_2)

    window.alert(`
    O personagem atacante ${nome1}
    Tem poder de ataque de ${ataque1}

    O personagem defensor ${nome2}
    Tem ${valor_pontos_de_vida_2} pontos de vida
    Tem ${valor_pontos_de_defesa_2} pontos de defesa
    Tem escudo ${escudo === true ? "sim" : "não"}

    APÓS O ATAQUE:
    O personagem defensor ${nome2}
    Tem ${valor_pontos_de_vida_2 - total_de_dano} pontos de vida
    `)

} else if (valor_ataque_1 > valor_pontos_de_defesa_2 && escudo === true) {
    total_de_dano = (valor_ataque_1 - valor_pontos_de_defesa_2) / 2

    window.alert(`
    O personagem atacante ${nome1}
    Tem poder de ataque de ${ataque1}

    O personagem defensor ${nome2}
    Tem ${valor_pontos_de_vida_2} pontos de vida
    Tem ${valor_pontos_de_defesa_2} pontos de defesa
    Tem escudo ${escudo === true ? "sim" : "não"}

    APÓS O ATAQUE:
    O personagem defensor ${nome2}
    Tem ${valor_pontos_de_vida_2 - total_de_dano} pontos de vida
    `)

} else if (valor_ataque_1 <= valor_pontos_de_defesa_2) {
    window.alert(`O personagem sofreu 0 de dano`)
}
