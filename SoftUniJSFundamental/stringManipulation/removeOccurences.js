function removeOccurrence(word, text) {
    while(text.includes(word)) {
        text = text.replace(word, '')
    }
    console.log(text);
}

removeOccurrence('ice', 'kicegiciceeb');