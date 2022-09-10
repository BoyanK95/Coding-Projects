function loading(number) {

    if (chekLoading(number)) {
        console.log(`${number}% Complete!`);
        print(number);
    }else{
        print(number)
        console.log('Still loading...');
    }



  function print(percent) {
    let result = "";
    let p = percent / 10;
    for (let i = 0; i < p; i++) {
      result += "%";
    }
    for (let j = 0; j < 10 - p; j++) {
      result += ".";
    }
    console.log(`${percent}% [${result}]`);
  }
  function chekLoading(percent) {
    let isLoaded = false;
    if (percent === 100) {
      isLoaded = true;
    }
    return isLoaded;
  }
}

loading(30);
loading(50);
loading(100);
