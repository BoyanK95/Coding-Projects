function solve(input) {
    let town ={
        town,
        latitude,
        longitude
    };
    for (const line of input) {
        let tokens  = line.split(' | ');
        town[town] = tokens[0];
        town[latitude] = Number(tokens[1]).toFixed(2);
        town[longitude] = Number(tokens[2]).toFixed(2);

        console.log(town);
    }
       
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])