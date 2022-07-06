function addNewPhone() {
  const phoneForm = document.querySelector("form#phones") // => 1 selecionar o form
  const newPhone = phoneForm.children[0].cloneNode(true) // => 2 clonando o filho do form
  const phonePosition = phoneForm.children.length + 1   // => 3 aonde vai ser a nova posição 
  newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": " // => 4 Insere um texto no proprio elemento
  phoneForm.appendChild(newPhone) // => 5 coloca esse novo elemento no DOM
  console.log(phoneForm.children) // Imprime todos os filhos que o formulario possuí
}

function printPhones() {
  let message = ""
  const phones = document.querySelectorAll("input[name='phone']")
  phones.forEach((phone, index) => {
    message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
  })
  alert(message)
}