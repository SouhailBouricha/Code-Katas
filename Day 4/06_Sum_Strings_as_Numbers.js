function sumStrings(a,b) { 
    let sum = "";
    let cury = 0;
    while(a.length < b.length){
        a = "0" + a;
    }
    while(b.length < a.length){
        b = "0" + b;
    }
    for (let i = a.length - 1; i >= 0 ; i--) {
        if(Number(a[i]) + Number(b[i]) + cury < 10){
            sum = String(Number(a[i]) + Number(b[i]) + cury) + sum;
            cury = 0;
        }
        else{
            if(i == 0){
                if((Number(a[i]) + Number(b[i]) + cury) != 0){
                    console.log((Number(a[i]) + Number(b[i]) + cury) ,"erkgerg");
                    sum = String((Number(a[i]) + Number(b[i]) + cury)) + sum;
                }
            }
            else{
                sum = String((Number(a[i]) + Number(b[i]) + cury) - 10) + sum;
            }
            cury = 1;
        }
    }
    while(sum[0] == "0"){
        sum = sum.slice(1,)
    }
    return sum
}

console.log(sumStrings("00103",'08567')) //08670
console.log(sumStrings("712569312664357328695151392",'8100824045303269669937')) //712577413488402631964821329

console.log(08787)