function solve(text, searchWord) {
    let count = 0;
   let index = text.indexOf(` ${searchWord} `)
    while (index > -1) {
        count++
        index = text.indexOf(` ${searchWord} `, index + 1)

    }
    if (text.startsWith(searchWord)) {
        count++
    }
    if (text.endsWith(searchWord)) {
        count++
    }
    console.log(count);
}

solve("This is a word and it also is a sentence", "is")