console.log(`trabalhando com loops`)

const destinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
const idadeComprador = 21
const estaAcompanhada = false
let passagemComprada = false



console.log(`\nDestinos possiveis:`)
console.log(destinos)

const podeComprar = (idadeComprador >= 18) || (estaAcompanhada)
const destino = "São Paulo"

let contador = 0
let destinoExiste = false

for (let cont = 0; cont<3; cont++){
    if (destinos[cont] == destino){
        console.log("Destino Existe")
        destinoExiste = true
        break
    }
    else{
        console.log("Destino não Existe")
    }
}

if (podeComprar && destinoExiste){
    console.log("Boa Viagem")
}
else{
    console.log("Desculpe, tivemos um erro")
}