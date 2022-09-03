function spice(yield) {
    let days = 0;
    let mined = 0;
    while (yield >= 100) {
        mined +=yield
        yield -=10;
        mined -=26;
        days +=1;
    }
    if (yield <= 100 && mined >=26) {
        mined -=26;
    }
    console.log(days);
    console.log(mined);
}

spice(111);
