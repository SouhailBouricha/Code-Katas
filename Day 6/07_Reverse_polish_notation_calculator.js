function calc(expr) {
    if(expr.split(' ').length === 1){
        return +expr.split(' ')[0]
    }
    else{
        let result = 0;
        for (let i = 0; i < expr.split(' ').length; i++) {
            const element = expr.split(' ')[i];
            let start = 0;
            if(["-","+","/","*"].includes(element)){
                result = result + expr.split(' ').slice(start,i).reduce((res,ele) =>  res += +ele ,0);
                start = i;
            }
        }
        return result;
    }
    return expr.split(" ");
}


console.log(calc(""), 0, "Should work with empty string",calc("") === 0);
console.log(calc("3"), 3, "Should parse numbers",calc("3") === 3);
console.log(calc("3.5"), 3.5, "Should parse float numbers",calc("3.5") === 3.5);
console.log(calc("1 3 +"), 4, "Should support addition",calc("1 3 +") === 4);
// console.log(calc("1 3 *"), 3, "Should support multiplication",calc("1 3 *") === 3);
// console.log(calc("1 3 -"), -2, "Should support subtraction",calc("1 3 -") === -2);
// console.log(calc("4 2 /"), 2, "Should support division",calc("4 2 /") === 2);
