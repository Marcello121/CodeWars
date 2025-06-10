function sayHello (name, city, state){
    let fullName = name.join(' ') // Boas práticas de JS usam camelCase '-'
    
    
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

console.log (sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))