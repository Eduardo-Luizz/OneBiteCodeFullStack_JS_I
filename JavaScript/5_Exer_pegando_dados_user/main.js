let alerta = alert("Bem vindo! A seguir pediremos que informe alguns dados");

let nome = prompt("Informe seu nome");
let idade = prompt("Informe sua idade");
let confirmaIdade = confirm(`Sua idade é ${idade} ?`);

let valueAlert = alert(
  `Seu nome é ${nome}
   Sua idade é ${idade}
   Confirmação da idade ${confirmaIdade}
`)