function solve(m,n){
    let sum = m+ n;
    let x = 1
    let y = 1
    let z = 1

    for (let i = 1; i <= sum; i++) {
        x *= i    
    }
    for (let j = 1; j < m; j++) {
        y*= j
        
    }
    for (let k = 1; k < n; k++) {
        z *= k
        
    }
    console.log(x / y / z);                                                   
    
}

solve(3,3)