console.log(`trabalhando com Condicionais`)

const destinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
const idadeComprador = 21
const estaAcompanhada = false
const passagemComprada = true

console.log(`Destinos possiveis:`)
console.log(destinos)

if ((idadeComprador >= 18) || (estaAcompanhada)) {
    destinos.splice(1, 1)
    console.log(`Pode Comprar`)
}
else {
    console.log(`Não pode comprar`)
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && passagemComprada == true) {
    console.log("Boa Viagem")
}
else {
    console.log("Voce não pode embarcar")
}
console.log(destinos)