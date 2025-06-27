function declareWinner(fighter1, fighter2, firstAttacker){
    // Ficou uma bagunça inacreditável apesar de ter funcionado parcialmente
    // O problema foi que um dos lutadores atacava duas vezes no último turno
    // E o código ficou totalmente bizonho, mas é isso
    // Parcialmente foi uma vitória considerando que eu estava quebrando--
    // --a cabeça para pensar na lógica desse exercício 😎  

    
    // Quando o fighter1 é o primeiro a atacar

    if (firstAttacker == fighter1.name){
        while (fighter1.hp && fighter2.hp >= 1){
            console.log(`${fighter1.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.hp} health`)
            
            
            console.log(`${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.hp} health`)
            fighter1.hp -= fighter2.damage

            if (fighter1.hp <= 0){
                console.log(`${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.hp} and is dead. ${fighter2.name} Wins`)
                return fighter2.name
                
            } else if (fighter2.hp <= 0) {
                console.log(`${fighter1.name} Venceu!`)
                return fighter1.name
            }
            
        }
        
    // Quando o fighter2 é o primeiro a atacar    

    } else if (firstAttacker == fighter2.name){
        while (fighter1.hp && fighter2.hp -1){
            console.log(`${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.hp} health`)
            fighter1.hp -= fighter2.damage
            
            console.log(`${fighter1.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.hp} health`)
            fighter2.hp -= fighter1.damage
            
            
        }

        if (fighter1.hp <= 0){
                console.log(`${fighter2.name} Venceu!`)
                return fighter2.name
                
            } else if (fighter2.hp <= 0) {
                console.log(`${fighter1.name} Venceu!`)
                return fighter1.name
            }

    }

    
}

class fighter {
    constructor(name, hp, damage){
            this.name = name;
            this.hp = hp;
            this.damage = damage;
    }
        
}

declareWinner(
    new fighter('Toney', 20, 4), 
    new fighter('Holyfield', 15, 6), 
    'Toney'
);



