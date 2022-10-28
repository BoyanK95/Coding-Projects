function unikPathc(m, n) {
    let firstVar = m + n
    let allPosibleCombos = 1
    let second = 1
    let third = 1

    for (let i = 1; i <= firstVar; i++) {
        allPosibleCombos *= i
        
    }
    for (let j = 1; j <= n; j++) {
        second *= j
        
    }
    for (let k = 1; k <= m; k++) {
        third *= k
        
    }
    console.log(third);
}

unikPathc(6,4)