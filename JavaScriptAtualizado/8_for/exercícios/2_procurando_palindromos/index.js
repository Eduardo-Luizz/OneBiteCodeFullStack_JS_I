
const palavra = prompt("Digite um palindromo: ")
const palavra_array = palavra.split("")
const palavra_array_invertida = palavra_array.reverse()
let palavra_unida

for (let i = 0; i < palavra_array_invertida.length; i++) {
    palavra_unida = palavra_array_invertida.join("")
}

if (palavra_unida === palavra) {
    alert(`A palavra digita é um palíndromo:\nPalavra digitada ${palavra}\nPalavra lida de trás para frente ${palavra_unida}`)
} else {
    alert(`A palavra digita não é um palíndromo:\nPalavra digitada ${palavra}\nPalavra lida de trás para frente ${palavra_unida}`)
}

