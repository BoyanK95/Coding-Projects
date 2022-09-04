function cone(rad, height) {
    let volume = (Math.PI) * rad * rad * (height / 3);
    let s = Math.sqrt(rad * rad + height * height);
    let area = Math.PI * rad * (rad + s);
    area = area.toFixed(4);
    volume = volume.toFixed(4);

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
    
}

cone(3, 5);
cone(3.3, 7.8);
