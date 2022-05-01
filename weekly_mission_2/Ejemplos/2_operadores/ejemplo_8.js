// Ejemplo 8: Filtrar una lista por condicional

const scores = [
    { name: 'Alex', score: 95 },
    { name: 'Leti', score: 98 },
    { name: 'Mau', score: 80 },
    { name: 'Esme', score: 50 },
    { name: 'Manu', score: 85 },
    { name: 'Jessi', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 85)
  console.log("Ejemplo 8: Filtrando elementos por score mayor a 85")
  console.log(scoresGreaterEighty)
  