function rgb_1(r, g, b){
    let arr = [r,g,b];
    let hex = "";
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        element > 255 ? element = 255 : element = element;
        element < 0 ? element = 0 : element = element;
        if(element.toString(16).length === 1){
            if(element < 16){
                hex = hex + "0" + element.toString(16);
            }
            else{
                hex = hex + element.toString(16) + element.toString(16);
            }
        }
        else{
            hex = hex + element.toString(16);
        }
    } 
    return hex.toUpperCase();
}

function rgb(r, g, b){
    let arr = [r,g,b];
    return arr.reduce((hex,element) => {
        element > 255 ? element = 255 : element = element;
        element < 0 ? element = 0 : element = element;
        if(element.toString(16).length === 1){
            if(element < 16){
                hex = hex + "0" + element.toString(16);
            }
            else{
                hex = hex + element.toString(16) + element.toString(16);
            }
        }
        else{
            hex = hex + element.toString(16);
        }
        return hex.toUpperCase();
    },"");
}
console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300,255,255), 'FFFFFF')
console.log(rgb(173,255,47), 'ADFF2F')
console.log(rgb(254,254,254), 'FEFEFE')
console.log(rgb(16,14,82), '10EE52')
console.log(rgb(13,203,265), '0DCBFF')
console.log(rgb(148, 0, 211), '9400D3')
let v = 15;
console.log(v.toString(16))