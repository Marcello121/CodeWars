function getSum (a, b){
    // Tive uma quantidade mediana de ajuda de IA na hora de fazer o direcionamento
    // do loop negativo
    const array = []
    
    if (a < b) {
        for (let runner = a; a <= b; a += 1){
        array.push(a)
        }

    } else if (a > b) {
        for (let runner = a; a >= b; a += -1)
        array.push(a)

    } else if (a == b) {
        return a

    }

    let soma = array.reduce((guardaValor, valorAtual) => guardaValor + valorAtual, 0)
    
    console.log(soma)
    return soma

}

getSum()