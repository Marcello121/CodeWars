function declareWinner(fighter1, fighter2, firstAttacker){
    // Verifica quem vai começar atacando (roubei do deepSeek pq nem imaginei que os operadores ternários poderiam ser úteis aqui)

    let attacker = (firstAttacker === fighter1.name) ? fighter1 : fighter2;
    let defender = (attacker === fighter1) ? fighter2 : fighter1;

    // while (true) ou seja, loop infinito até ser quebrado por algo, return, break, etc.,

    while (true){

        // Ataque
        defender.health -= attacker.damagePerAttack;
        let mensagem = `${attacker.name} attacks ${defender.name}; ${defender.name} now has ${defender.health} health`
        console.log(mensagem);
        
        
        // Verifica morte após o ataque

        if (defender.health <= 0){
            mensagem = ` and is dead. ${attacker.name} wins.`
            console.log(mensagem)
            
            return attacker.name
        } 
        
        [attacker, defender] = [defender, attacker]
    }       
}
// Criação da classe

class fighter {
    constructor(name, health, damagePerAttack){
            this.name = name;
            this.health = health;
            this.damagePerAttack = damagePerAttack;
    }
        
}
// Chamada da função declarando os status dos lutadores

declareWinner(
    new fighter('', 0, 0), 
    new fighter('', 0, 0), 
    ''
);



