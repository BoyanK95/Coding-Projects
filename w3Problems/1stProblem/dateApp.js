const currentDateEl = document.getElementById('date')
const currentDayEl = document.getElementById('day')
const today = new Date();
const day = today.getDay()
const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday']
let todayValue = 'Today is : ' + daylist[day] + '!';
currentDayEl.textContent = todayValue
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12)? 'PM' : 'AM';
hour = (hour >= 12) ? hour - 12: hour;
if (hour === 0 && prepand === 'PM') {
    if (minute === 0 && second === 0) {
        hour = 12
        prepand = 'Noon'
    }else{
        hour = 12
        prepand = ' PM'
    }
}

if (hour === 0 && prepand === ' AM') {
    if (minute=== 0 && second === 0) {
        hour = 12
        prepand= ' AM'
    }
}
console.log('Current Time : ' + hour + prepand + ' : ' + minute + ' : ' + second);
currentDateEl.textContent = `Current Time: ${hour} ${prepand}  :  ${minute}  : ${second}`