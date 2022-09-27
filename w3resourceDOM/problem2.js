function getFormvalue() {
    let names = document.querySelectorAll('input');

    for (let i = 0; i < names.length; i++) {
        if (names[i].value !== 'Submit') {
            console.log(names[i].value);
            debugger;
        }
    }
}