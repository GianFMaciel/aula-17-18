let digiteUmNumero
let soma = 0

while (digiteUmNumero !== 0) {
    digiteUmNumero = Number(prompt("Digite um número para somar ou 0 para encerrar:"))
    soma += digiteUmNumero
}

console.log("Resultado da sua soma é: ", soma)