function digitalRoot(n) {
    let num = n;
    while(String(num).length > 1){
        let newNum = 0; 
        for (let i = 0; i < String(num).length; i++) {
            const element = String(num)[i];
            newNum += Number(element); 
        }
        num = newNum;
    }
    return num;
}

console.log(digitalRoot(16), 7 );
console.log(digitalRoot(456), 6 );
console.log(digitalRoot(132189), 6 );
