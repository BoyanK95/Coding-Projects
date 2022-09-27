



function changeContent() {
    trNum = window.prompt("Input the Row number(0,1,2)", "0");
    colNum = window.prompt("Input the Column number(0,1)","0");
    content = window.prompt("Input the Cell content");

    let tableEl = document.getElementById('myTable').rows[parseInt(trNum,10)].cells
    
    tableEl[parseInt(colNum,10)].textContent = content

}