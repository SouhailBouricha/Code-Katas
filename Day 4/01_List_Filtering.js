function filter_list(l) {
    // Return a new array with the strings filtered out
    // let Num = [];
    // l.forEach(element => {
    //     if(typeof(element) == "number") Num.push(element);
    // });
    // return Num
    return l.reduce((result ,element) => { if(typeof(element) == "number")  {result.push(element)} return result;}, []);

}


console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,2,'aasf','1','123',123]));