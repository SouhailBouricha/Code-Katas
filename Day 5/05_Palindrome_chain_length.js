var palindromeChainLength = function(n) {
    let Step = 0;
    let number = n;
    const Checkpalindrome = (Number) => {
        let NewNumber = "";
        let value;
        for (let i = String(Number).length - 1; i >= 0; i--) {
            NewNumber = NewNumber + String(Number)[i];
        }
        NewNumber === String(Number) ? value = true : value = false;
        return value;
    }
    const GibeReverse = (Number) => {
        let NewNumber = "";
        for (let i = String(Number).length - 1; i >= 0; i--) {
            NewNumber = NewNumber + String(Number)[i];
        }
        return +NewNumber;
    }
    while(Checkpalindrome(number) === false && Step < Number.MAX_SAFE_INTEGER){
        number = number + GibeReverse(number);
        Step++;
    }
    return Step;
};

console.log(palindromeChainLength(1),  0);
console.log(palindromeChainLength(88), 0);    
console.log(palindromeChainLength(87), 4);
console.log(palindromeChainLength(89), 24);
console.log(palindromeChainLength(10), 1);
