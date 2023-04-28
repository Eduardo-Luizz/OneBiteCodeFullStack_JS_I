function executar() {

    let opcao = ""

    while (opcao !== "6") {

        opcao = prompt(`Escolha uma opção:\n1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do traézio\n5 - Área do círculo\n6 - Sair`);

        switch (opcao) {
            case "1":
                const base_triangulo = parseFloat(prompt("Digite o valor da base: "))
                const altura_triangulo = parseFloat(prompt("Digite o valor da altura: "))
                alert(`Há área do triângulo é ${area_triangulo(base_triangulo, altura_triangulo)}`)
                break;
            case "2":
                const base_retangulo = parseFloat(prompt("Digite o valor da base: "))
                const altura_retangulo = parseFloat(prompt("Digite o valor da altura: "))
                alert(`Há área do retângulo é ${area_retangulo(base_retangulo, altura_retangulo)}`)
                break;
            case "3":
                const lado_quadrado = parseFloat(prompt("Digite o valor do lado: "))
                alert(`Há área do quadrado é ${area_quadrado(lado_quadrado)}`)
                break;
            case "4":
                const base_maior = parseFloat(prompt("Digite o valor da base maior: "))
                const base_menor = parseFloat(prompt("Digite o valor da base menor: "))
                const altura_trapezio = parseFloat(prompt("Digite o valor da altura: "))
                alert(`Há área do trapézio é ${area_trapezio(base_maior, base_menor, altura_trapezio)}`)
                break;
            case "5":
                const raio = parseFloat(prompt("Digite o valor do raio: "))
                alert(`Há área do círculo é ${area_circulo(raio)}`)
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

function area_triangulo(base, altura) {
    const resultado = (base * altura) / 2
    return resultado
}

function area_retangulo(base, altura) {
    const resultado = (base * altura)
    return resultado
}

function area_quadrado(lado) {
    const resultado = (lado ** 2)
    return resultado
}

function area_trapezio(base_maior, base_menor, altura) {
    const resultado = (base_maior + base_menor) * altura / 2
    return resultado
}

function area_circulo(raio) {
    const pi = 3.14
    const resultado = pi * (raio ** 2)
    return resultado
}