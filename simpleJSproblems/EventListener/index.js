//  .addEventListener (event, function useCapture)
// You can add many event handlrs to one elemtn.
// Even the same event that invokes different function

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");


// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen)

// function changeRed() {
//     innerDiv.style.backgroundColor = "red";
// }

// function changeGreen() {
//     innerDiv.style.backgroundColor = "lightgreen";
// }

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue() {
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue";
}