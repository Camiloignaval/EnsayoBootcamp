import { CalculadoraCompleja } from "./CalculadoraCompleja.js"
import { CalculadoraSimple } from "./CalculadoraSimple.js"

// Porfavor agregar a package.json lo siguiente:
// {...
//   "type" : "module"
//  ...}
// Quitar para ejecutar programa de bikeShop

console.log('------------------------------------------ \nDemostración Calculo de Stock de Seguridad \n------------------------------------------\n\nTomando 5 valores aleatorios...'
)


const lista = [1, 2, 3, 4, 5].map(() => Math.floor(Math.random() * 51))

console.log(lista.join(' '))
console.log('\nStocks de Seguridad con Algoritmo Simple: ' + CalculadoraSimple(lista).join(' '))
console.log('Stocks de Seguridad con Algoritmo Compleja: ' + CalculadoraCompleja(lista).join(' '))




