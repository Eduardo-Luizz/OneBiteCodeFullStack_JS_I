let pilotName = prompt("Olá piloto, qual é seu nome ? ");
let initialVelocity = 0;
let velocity = prompt("Qual a velocidade que deseja acelerar a nave ? ");

let confirmVelocity = confirm(`Estamos acelerando para ${velocity} km/s`);

if (confirmVelocity) {
  initialVelocity = velocity
}
  if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
  } else if (velocity <= 40) {
    alert("Você está devagar. Podemos aumentar mais.")
  } else if (velocity <= 80) {
    alert("Parece uma boa velocidade para manter.")
  } else if (velocity >= 100) {
    alert("Velocidade perigosa. Controle automatico forçado.")
  }
  alert(`Piloto${pilotName} \nVelocidade: ${velocity}`)