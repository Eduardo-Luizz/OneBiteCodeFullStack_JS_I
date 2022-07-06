
function show() {
  let element = document.getElementById("name") // => document é o DOM 
  console.log(`getElementById ${element.value}`) // Como faz parte do DOM consigo pegar o seu valor, para ver esse resultado é preciso f12 no navegador
}

function show() {
  let element = document.getElementsByName("phone")
  console.log(element[0].value) // busca pelo nome
}

function show() {
  let element = document.querySelectorAll("div#phones input[name='phone']") // pega todos os campos input de nome fone dentro da div de id fones
  console.log(element[1].value) // busca pelo nome
}

function show() {
  let element = document.getElementsByTagName("input") // pega todos os elementos pela tag
  console.log(element) // busca pelo nome
}