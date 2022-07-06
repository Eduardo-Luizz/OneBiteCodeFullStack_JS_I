
function saveHouse() {
  let numeroResidencia = document.querySelector("input[name='number-house']").value
  let bairro = document.querySelector("input[name='bairro']").value
  let cidade = document.querySelector("input[name='cidade']").value
  let area = document.querySelector("input[name='area-da-casa']").value

  //Criando a lista
  let newListValue = document.createElement("li")
  newListValue.innerText = area + "m², número" + numeroResidencia + " (" + bairro + " - " + cidade + ") "
  //Criando o botao
  let removeButton = document.createElement("button")
  removeButton.type = "button"
  removeButton.innerText = "Remover"
  removeButton.setAttribute("onclick", "removeHouse(this)")

  newListValue.appendChild(removeButton)

  document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
  let liToRemove = button.parentNode
  document.getElementById("house-list").removeChild(liToRemove)
}