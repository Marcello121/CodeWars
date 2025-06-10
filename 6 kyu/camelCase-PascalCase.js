function toCamelCase(str){

let palavras = str.split(/[-_]/); // [stealth, warrior, zero]

let resultado = palavras.map((palavra, index) => {

    if (index === 0){
        return palavra
    } else {
        return palavra[0].toUpperCase() + palavra.slice(1)
    } 



}).join('')

return resultado

}


// Testes

console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('The_Stealth_Warrior'))
console.log(toCamelCase('a-Pippi-was_Hungry'))









