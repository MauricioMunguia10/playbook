// Ejemplo 7: Uso de filter para filtrar una lista de elementos

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Nigeria']
const countriesContainingLand = countries7.filter((countries7) => // esta es una función
  countries7.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en ia")
console.log(countriesEndsByia)