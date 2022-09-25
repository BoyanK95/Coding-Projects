function solve(text, word) {
    let cencored = text.replace(word, '*'.repeat(word.length))
    while (cencored.includes(word)) {
        cencored = cencored.replace(word, '*'.repeat(word.length))
    }
    console.log(cencored);
}

solve("A small penis with some big balls and a big penis, with small balls", "penis")