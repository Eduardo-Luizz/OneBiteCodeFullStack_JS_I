class SpaceShip {
  constructor(name, type = "Descoberta") {
    this.name = name
    this.type = type
  }
}

//Criando 2 naves apartir da classe SpaceShip
let darwin = new SpaceShip("Darwin")
let helmet = new SpaceShip("Helmet", "Batalha")

console.log(darwin)
console.log(helmet)