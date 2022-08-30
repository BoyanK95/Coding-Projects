const myLabel = document.getElementById("myLabel");

uptade();

function uptade() {
    
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minitues = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        return `${hours}:${minitues}:${seconds} ${amOrPm}`
    }
}