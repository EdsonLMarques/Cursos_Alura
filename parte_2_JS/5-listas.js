console.log(`trabalhando com listas`)

const destinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
console.log(`Destinos possiveis:`)
console.log(destinos)

destinos.push(`Curitiba`)
console.log(`Destinos possiveis:`)
console.log(destinos)

destinos.splice(1, 1)

console.log(`Destinos possiveis:`)
console.log(destinos)