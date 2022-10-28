function sockMerchant(n, ar) {
        let result = 0
        while (ar.length > 0) {
            let newArray = []
            let count = 0
            for(let i = 0; i< ar.length; i ++) {
                if(ar[i] === ar[0]) {
                    count ++
                } else {
                  newArray.push(ar[i])
                }
            }
            result += Math.floor(count/2)
            ar =[...newArray]
        }
        return result
}


sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])