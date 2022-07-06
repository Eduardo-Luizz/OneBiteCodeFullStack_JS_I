class SpaceShipWeapon {
  constructor(identifier) {
    this.identifier = identifier
    this.shotsLeft = 5 // => Iniciada com 5 tiros
  }

  shoot(){ // => metodo que decrementa 1 tiro a cada vez que for chamado
    if (this.shotsLeft > 0) {
      console.log("Bang")
      this.shotsLeft -= 1 
    } else {
      throw new Error("Arma sem munição")
    }
  }
}

let fenixWeapon = new SpaceShipWeapon(1524)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon)