let oldPersonName = prompt("Digite o nome da pessoa mais velha")
let oldPersonAge = prompt("Digite a idade da pessoa mais velha")
let youngerPersonName = prompt("Digite o nome da pessoa mais nova")
let youngerPersonAge = prompt("Digite a idade da pessoa mais nova")

let ageDiference = oldPersonAge - youngerPersonAge;

alert(`
  Pessoa mais velha é ${oldPersonName} com ${oldPersonAge} anos
  Pessoa mais nova é ${youngerPersonName} com ${youngerPersonAge} anos
  Diferença de idade é ${ageDiference}
`)