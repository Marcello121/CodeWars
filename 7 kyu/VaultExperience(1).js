function thirstyIn (water, ageOfDwellerArray){

    // Se não houver habitantes, retorne -1
    if (!ageOfDwellerArray.length){
        return -1;
    }


    // Contar quanta água será gasta por dia, considerando a idade dos dwellers no array
    const gastoAgua = ageOfDwellerArray.map(num => {
        if (num < 18) return 1;
        if (num >= 50) return 1.5;
        if (num >= 18 && num <= 50) return 2;
    })


    // Fazer a divisão da água pelo consumo diário
    const consumoDiario = gastoAgua.reduce((total, num) => total + num, 0);

    
    // Se não tiver água nem pra um dia
    if(water < consumoDiario){
        
        return 0
    }
    
    // Se tem água pra pelo menos um dia
    else {
        // Calcular dias restantes com água
        const divisaoAgua = water / consumoDiario;
        const dias = parseInt(divisaoAgua);
        
        console.log(`Water for ${dias} days`);
        return dias
    }
}

thirstyIn (150, [2, 18, 18, 18])

// Apesar de ser simples, diria que meu raciocínio foi bom
// Quebrar em etapas facilita muito a resolução do código
// Certeza que tem um jeito de resolver esse mesmo problema com menos da metade das linhas 🥸