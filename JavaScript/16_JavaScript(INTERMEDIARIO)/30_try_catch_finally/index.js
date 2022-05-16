class SpaceShipWeapon {
  constructor(identifier) {
    this.identifier = identifier
    this.shotsLeft = 5
  }

  shoot(){
    if (this.shotsLeft > 0) {
      console.log("Bang")
      this.shotsLeft -= 1 
    } else {
      throw new Error("Arma sem munição")
    }
  }

  reload(){
    this.shotsLeft = 5
  }
}

let fenixWeapon = new SpaceShipWeapon(10)

try {
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
} catch (error) {
  console.log(error.message)
  fenixWeapon.reload()
} finally { // Sempre executa não depende de nenhum evento do try catch
  console.log("A arma deu bons tiros")
}
console.log(fenixWeapon)