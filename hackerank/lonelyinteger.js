function lonelyinteger(a) {
    // Write your code here
let numb=0;
a.map(num=>{
    if(a.indexOf(num)===a.lastIndexOf(num)){
        numb=num;
    }
});
return numb;
}

