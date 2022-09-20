function iqTest(numbers) {
    let odds = [];
    let evens = [];
    numbers.split(" ").forEach((element,index) => {
        if(element % 2 == 0) odds.push({element,index});
        else evens.push({element,index});
    });
    if(odds.length == 1) return odds[0].index + 1;
    if(evens.length == 1) return evens[0].index + 1;
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));