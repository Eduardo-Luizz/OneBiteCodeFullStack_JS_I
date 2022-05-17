//criação da classe
class SpacialStation{

  // método construtor, instanciação da classe
  constructor(name, platformsQuantity){
    this.name = name
    this.platformsQuantity = platformsQuantity
  }
}
// observatorio = name 40 = platformQuantity
let observatory = new SpacialStation("Observatório", 40)

console.log(observatory)