let montafrase = (palavras) => {
    let fraseFinal = ""
    for (let palavra of palavras) {
        fraseFinal = fraseFinal + palavra + " "

    }  
    return fraseFinal.trim()
}

const minhasPalavras = ["Oi", "Sumido", "Tudo", "Bem?", "Saudades." ]

console.log(montafrase(minhasPalavras))
