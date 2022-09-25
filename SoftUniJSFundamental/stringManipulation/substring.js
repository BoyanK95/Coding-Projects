function solve(...params) {
    let [text , startIndex, count] = params

    let result = text.substring(startIndex, startIndex + count)
    console.log(result);
}

solve("ASentance", 1, 8)