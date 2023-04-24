
valor1 = window.prompt('Digite o primeiro valor: ')
valor2 = window.prompt('Digite o segundo valor: ')
valor1 = parseFloat(valor1)
valor2 = parseFloat(valor2)

window.alert(
    `Soma: ${valor1} + ${valor2} = ${valor1 + valor2}\nSubtração: ${valor1} - ${valor2} = ${valor1 - valor2}\nMultiplicação: ${valor1} x ${valor2} = ${valor1 * valor2}\nDivisão: ${valor1} / ${valor2} = ${valor1 / valor2}`)