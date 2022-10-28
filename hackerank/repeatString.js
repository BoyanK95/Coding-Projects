function repeatString(s, n) {
    const calculateCount = (arr, idx) => {
        let initialCount = 0
        for (let i = 0; i < idx; i++) {
            if (arr[i] === 'a') {
                initialCount += 1
            }
        }

        return initialCount;
    } 

    const originalString = s.split('');
    const size = originalString.length;
    const iterations = Math.floor(n / size);
    const remaining = n % size
    const initCount = calculateCount(originalString, size);

    const diff = calculateCount(originalString, remaining);
    const actualCount = (initCount * iterations) + diff;
    return actualCount;
}