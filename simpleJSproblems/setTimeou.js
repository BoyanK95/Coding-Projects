//  setTimeout() = invokes a funcktion after a number of miliseconds
//                  asyncrhonous fucntion (dosnet pasue execution)

setTimeout(firstMessage, 3000);
setTimeout(secondMessage, 6000);
setTimeout(thirdMessage, 9000);



function firstMessage() {
    alert(`Buy this course for $500!`)
}

function secondMessage() {
    alert(`This is not a scam!`)
}

function thirdMessage() {
    alert(`Do ITT!!!`)
}