let recebeArray = (numeros) => {
    let maior = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        const valorAtual = numeros[i]
        if (valorAtual > maior) {       // para saber qual é o menor numero é só inverter o > para <
            maior = valorAtual
        }
    }
    return maior
}


const meusnumeros = [11, 15, 18, 25, 14, 12]
const retorno = recebeArray(meusnumeros)
console.log(retorno)