
carro1 = window.prompt('Digite a velocidade do carro 1: Km/h ')
carro2 = window.prompt('Digite a velocidade do carro 2: Km/h ')

valor1 = parseFloat(carro1)
valor2 = parseFloat(carro2)

if (valor1 > valor2) {
    window.alert(`A velocidade do carro 1 foi ${valor1}Km/h\nA velocidade do carro 2 foi ${valor2}Km/h\nMais rápido ${valor1}Km/h`)
} else if (valor1 < valor2) {
    window.alert(`A velocidade do carro 1 foi ${valor1}Km/h\nA velocidade do carro 2 foi ${valor2}Km/h\nMais rápido ${valor2}Km/h`)
} else {
    window.alert(`A velocidade do carro 1 foi ${valor1}Km/h\nA velocidade do carro 2 foi ${valor2}Km/h\nIguais`)
}