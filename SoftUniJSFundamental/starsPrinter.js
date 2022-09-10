function printer(char, num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result +=char
        console.log(result);
        
    }
    
}

printer('*',5)