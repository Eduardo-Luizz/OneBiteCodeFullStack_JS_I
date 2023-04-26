
let numero = prompt('Digite o número que deseja obter a tabuada: ')
let resultado = ""

for (let i = 0; i < 21; i++) {
    resultado += `${numero} X ${i} = ${numero * i}\n`
}

alert(resultado)