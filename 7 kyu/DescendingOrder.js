function desc (n){
    // Pegar o número -> Transformar ele em um array -> Reorganizar em ordem decrescente dentro do array -> Juntar ele com o .join -> Mostrar

    // ...n: isso é o rest operator, que transforma os argumentos recebidos em um array

    // O sort vai percorrer o array fazendo comparações entre pares (dois números (a, b))

    // Se a função retornar negativo (< 0): a será colocado antes de b
    // Se a função retornar zero (0): a ordem atual será mantida
    // Se a função retornar positivo (> 0): b será colocado antes de a
    
    let a1 = String(n).split('').sort((a, b) => b - a).join('');
    let a2 = parseInt(a1)
    
    console.log(a1);

    // Tava faltando o return (obrigatório no CodeWars) e faltava converter pra Number
    return a2



}

desc(657468745465478964)