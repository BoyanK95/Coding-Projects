function staircase(n) {
    let res = ''
    for(let i = 0; i<= n; i++){
        res += '\n'
        for(let j=0; j <= i; j++){
            res += '#'
        }
    }
    console.log(res);
}

staircase(6)

let min = Math.min(...arr);
let max = Math.max(...arr)
let arrSum = arr.reduce((a,b) => a + b)
console.log(arrSum - max,arrSum - min)

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}

function birthdayCakeCandles(candles) {
    let count = 1
    candles.sort((a,b)=> b - a);
    for(let i = 0; i < candles.length; i++){
        if(candles[i] === candles[i + 1]){
            count++
        }
    }
    return count
}

function birthdayCakeCandles(candles) {
    let amount =  Math.max(...candles);
    return candles.filter(v => v === amount).length;
}

console.log(birthdayCakeCandles([3,2,1,3,4]));

function timeConversion(s) {
  let hour = s[0] + s[1];
  let min = s[3] + s[4];
  let sec = s[6] + s[7];
  let hourType = s[8] + s[9];

  if (hourType == 'PM' && hour != '12') {
    hour = parseInt(hour) + 12
  }
  if (hourType == 'AM' && hour == 12) {
    hour = '00'
  }
  const newTime = (`${hour}:${min}:${sec}`);
  return newTime
}

timeConversion("07:05:45PM");
