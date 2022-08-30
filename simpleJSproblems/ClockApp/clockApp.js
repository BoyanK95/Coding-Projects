const myLabel = document.getElementById("myLabel");

uptade();
setInterval(uptade, 500);

function uptade() {
    
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minitues = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;
        hours = formatZeros(hours);
        minitues = formatZeros(minitues);
        seconds = formatZeros(seconds);

        return `${hours}:${minitues}:${seconds} ${amOrPm}`
    }
    function formatZeros(time) {
        time = time.toString();
        return time.lenght < 2 ? "0" + time : time;
    }
}