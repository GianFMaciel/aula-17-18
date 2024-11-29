let quantidadeBichos = Number(prompt("Quantos bichinhos de estimação você tem ?"))
let nomeBichos = []

if (quantidadeBichos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidadeBichos > 0) {
    for (let i = 0; i < quantidadeBichos; i++) {
      let nome = prompt("Digite o nome do seu bichinho:")
      nomeBichos.push(nome)
    } 
    
}

console.log(nomeBichos)







/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    



    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    



    c) Por fim, imprima o array com os nomes dos bichinhos no console */