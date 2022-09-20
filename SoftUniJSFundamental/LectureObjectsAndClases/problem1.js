function solve(name, lastName, age) {
    let person = {
        name,
        lastName,
        age
    }
    
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

solve("Peter",

"Pan",

"20")