function XO(str) {
    let xx = 0; 
    let oo = 0;
    str.toLowerCase().split("").forEach(element => {
        if(element == "x" || element == "o"){
            element == "x" ? xx++ : oo++;
        }
    });
    return xx == oo ? true : false;
}

console.log(XO("xkoXfo"));