// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'Alex', score: 95 },
    { name: 'Leti', score: 98 },
    { name: 'Mau', score: 80 },
    { name: 'Esme', score: 50 },
    { name: 'Manu', score: 85 },
    { name: 'Jessi', score: 100 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score < 80)
  console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)