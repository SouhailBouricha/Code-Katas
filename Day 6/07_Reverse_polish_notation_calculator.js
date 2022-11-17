function calc(expr) {
    // TODO: Your awesome code here
    return 0;
}


console.log(calc(""), 0, "Should work with empty string");
console.log(calc("3"), 3, "Should parse numbers");
console.log(calc("3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");
