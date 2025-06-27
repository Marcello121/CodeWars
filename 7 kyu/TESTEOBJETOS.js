const lutador = {
    nome: 'James Toney',
    estilo: 'Counter-puncher',
    peso: '88 Kg',
    
    tudo: function(){
        return 'O nome é '+this.nome+", O estilo é "+this.estilo+', O peso é '+this.peso
    }
};

console.log(lutador.tudo())