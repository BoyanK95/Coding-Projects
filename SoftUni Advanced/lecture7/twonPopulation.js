function solve(input) {
    let towns = []
    input.forEach(line => {
        let token = line.split(' <->');
        let name = token[0]
        let population = token[1]
        towns.push({name, population})
    });
    
    
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])