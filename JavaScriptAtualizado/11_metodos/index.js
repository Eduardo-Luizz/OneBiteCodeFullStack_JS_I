let pessoa = {
    nome: "Eduardo",
    idade: 26,
    dizer_ola() {
        console.log("Olá, Meu nome é: " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizer_ola()
