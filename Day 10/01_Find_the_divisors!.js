function divisors(integer){
    let Arr = [];
    for(let i = 2; i < integer; i++) {
        if(integer % i === 0){
            Arr.push(i);
        }
    }
    return Arr.length > 0 ? Arr : `${integer} is prime`;
};

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");