let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.strokeStyle = "purple"
context.lineWidth = 7;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();