const myBtn = document.getElementById("myBtn");
const myAnimation = document.getElementById("myDiv");

myBtn.addEventListener("click", begin);

function begin() {
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;


    timerId = setInterval(frame, 5);

    function frame() {
        if (x >= 500 || y >= 500) {
            clearInterval(timerId);
        }
        else{
            degrees+=3;
            x+=1;
            y+=1;


            myAnimation.style.left = x +"px";
            myAnimation.style.top = y +"px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}