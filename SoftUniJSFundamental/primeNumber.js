function prime(num) {
    if (num == 2 || num == 3 || num == 5 || num == 7 || num == 11) {
        console.log('true');
    }else if (num > 1 && num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0 && num % 11 != 0) {
        console.log('true');
    }
    else{
        console.log('false');
    }
}

prime(7);
prime(8);
prime(81);
