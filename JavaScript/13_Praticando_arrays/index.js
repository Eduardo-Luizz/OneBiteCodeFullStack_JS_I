const hitchedSpaceShips = 
[
  ["Fenix", 8, true], 
  ["Golias", 10, true], 
  ["Helmet", 5, false], 
  ["Elemental", 3, true], 
  ["Darwin", 15, false]
]

let crew = hitchedSpaceShips.filter(element => {
  return element[1] >= 9
}).map(element => {
  return element[0]
})

let onGoingHitchPlatform = hitchedSpaceShips.findIndex(element => {
  return element[2] === false
})

let highLightSpace = hitchedSpaceShips.map(element => {
  return element[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crew.join(", ")
message += "\nPlataforma com processo de engate: " + (onGoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highLightSpace.join(", ")

alert(message)