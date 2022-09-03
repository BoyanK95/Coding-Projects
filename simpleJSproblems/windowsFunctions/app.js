const myBtn = document.querySelector("#myBtn");
const closeBtn = document.getElementById("closeBtn");
const printBtn = document.getElementById("printBtn");
const alertBtn = document.getElementById("alertBtn");
const helloBtn = document.getElementById("helloBtn");


myBtn.addEventListener("click", () => window.open("https://www.google.com/"));
closeBtn.addEventListener("click", () => window.close());
printBtn.addEventListener("click", () => window.print());
helloBtn.addEventListener("click", () => window.prompt("Hello, What's your name ?"));
alertBtn.addEventListener("click", () => window.alert("GIVE ME MONEYYYY!!!"));