
document.getElementById("myBtn").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypallBtn = document.getElementById("paypallBtn");

    
    if (myCheckBox.checked) {
        console.log("You are subscribed!");
    }
    else {
        console.log("You are NOT subscribed!");

    }

    if (visaBtn.checked) {
        console.log("You are paying with Visa!");
    }
    else if (mastercardBtn.checked) {
        console.log("You are paying with MasterCard!");
    }
    else if (paypallBtn.checked) {
        console.log("You are paying with Paypal!");
    }
    else{
        console.log("You must select a payment type!");
    }
}