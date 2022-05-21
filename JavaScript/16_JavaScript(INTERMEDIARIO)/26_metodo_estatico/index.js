class ResourceProcessStation {
  constructor(name, monthlyProcessedLoad) {
    this.name = name
    this.monthlyProcessedLoad = monthlyProcessedLoad
  }

  static calculateProcessInHours(monthlyProcessedLoad, hours){
    return monthlyProcessedLoad / 720 * hours
  }
}

let totalProcessing = ResourceProcessStation.calculateProcessInHours(500, 6)
console.log(totalProcessing)

// método estático não consegue chamar direto do objeto
let processor = new ResourceProcessStation("Gaia", 2000)
// processor.calculateProcessInHours(processor.monthlyProcessedLoad, 10)
// console.log(processor)

// como fazer 
let totalProcessor = ResourceProcessStation.calculateProcessInHours(processor.monthlyProcessedLoad, 10)
console.log(totalProcessor)