function isValidAnagram(s1, s2) {
    if (s1.length === s2.length) {
        const newS1SortedArr = s1.split('').sort((a, b) => a.localeCompare(b))
        const newS2SortedArr = s2.split('').sort((a, b) => a.localeCompare(b))
        const results = []
        for (let i = 0; i < s1.length; i++) {
            if (newS1SortedArr[i] !== newS2SortedArr[i]) {
                results.push(false)
            } else {
                results.push(true)
            }
        }
        isFalse = results.includes(false)
        if (isFalse) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}


console.log(isValidAnagram('danger', 'garden'));
console.log(isValidAnagram('danger', 'garsen'));
console.log(isValidAnagram('danger', 'gardener'));