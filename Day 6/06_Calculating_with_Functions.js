function zero(fun) {
    let number = 0;
    return helper(fun,number);
}
function one(fun) {
    let number = 1;
    return helper(fun,number);
}
function two(fun) {
    let number = 2;
    return helper(fun,number);
}
function three(fun) {
    let number = 3;
    return helper(fun,number);
}
function four(fun) {
    let number = 4;
    return helper(fun,number);
}
function five(fun) {
    let number = 5;
    return helper(fun,number);
}
function six(fun) {
    let number = 6;
    return helper(fun,number);
}
function seven(fun) {
    let number = 7;
    return helper(fun,number);
}
function eight(fun) {
    let number = 8;
    return helper(fun,number);
}
function nine(fun) {
    let number = 9;
    return helper(fun,number);
}
function helper(fun,number){
    if(fun){
        return Math.floor(fun.ExactFunction(number,fun.num));
    }
    else{
        return number;
    }
}
function plus(newNum) { return { "ExactFunction" : function add(a,b){ return a + b }, "num" : newNum}; }
function minus(newNum) { return { "ExactFunction" : function reduce(a,b){ return a - b }, "num" : newNum}; }
function times(newNum) { return { "ExactFunction" : function multipy(a,b){ return a * b }, "num" : newNum}; }
function dividedBy(newNum) { return { "ExactFunction" : function divide(a,b){ return a / b }, "num" : newNum}; }

console.log(zero(plus(one())));
console.log(one(plus(zero())));
console.log(seven(times(five ())), 35,seven(times(five ())) === 35);
console.log(four (plus (nine ())), 13,four (plus (nine ())) === 13);
console.log(eight(minus(three())),  5,eight(minus(three())) ===  5);
console.log(six(dividedBy(two())),  3,six(dividedBy(two())) ===  3);
console.log(three(dividedBy(two())),  1,three(dividedBy(two())) ===  1);