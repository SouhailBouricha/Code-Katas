function rgb(r, g, b){
    let arr = [r,g,b];
    let hex = "";
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        element > 250 ? element = 255 : element = element;
        element < 0 ? element = 0 : element = element;
        if(element.toString(16).length === 1){
            hex = hex + element.toString(16) + element.toString(16);
        }
        else{
            hex = hex + element.toString(16);
        }
    } 
    return hex.toUpperCase();
}

console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300,255,255), 'FFFFFF')
console.log(rgb(173,255,47), 'ADFF2F')