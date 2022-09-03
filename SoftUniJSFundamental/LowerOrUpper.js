function lowerOrUpper(char) {
    let charValue = char.charCodeAt()
    if (charValue >= 65 && charValue <= 90) {
        console.log('upper-case');
    }else{
        console.log('lower-case');
    }
}

lowerOrUpper('L')
lowerOrUpper('f')