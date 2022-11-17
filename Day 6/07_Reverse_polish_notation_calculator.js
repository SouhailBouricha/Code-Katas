function calc(expr) {
   let inputs = [...expr.split(" ")];
   let stuck = [];
   let operations = {
    "+" : (a,b) => a + b,
    "*" : (a,b) => a * b,
    "-" : (a,b) => a - b,
    "/" : (a,b) => a / b,
   }
   for (let i = 0; i < inputs.length; i++) {
        if(operations[inputs[i]]){
            let opi = inputs[i];
            let right = stuck.pop();
            let left = stuck.pop();
            stuck.push(operations[opi](+left,+right));
        }
        else{
            stuck.push(inputs[i]);
        }
   }
   return +stuck;
}


console.log(calc(""), 0, "Should work with empty string",calc("") === 0);
console.log(calc("3"), 3, "Should parse numbers",calc("3") === 3);
console.log(calc("3.5"), 3.5, "Should parse float numbers",calc("3.5") === 3.5);
console.log(calc("1 3 +"), 4, "Should support addition",calc("1 3 +") === 4);
console.log(calc("1 3 *"), 3, "Should support multiplication",calc("1 3 *") === 3);
console.log(calc("1 3 -"), -2, "Should support subtraction",calc("1 3 -") === -2);
console.log(calc("4 2 /"), 2, "Should support division",calc("4 2 /") === 2);
