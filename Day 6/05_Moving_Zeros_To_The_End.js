function moveZeros(arr) {
    let realArr = [];
    let zerosArr = [];
    arr.forEach(element => {element !== 0 ? realArr.push(element) : zerosArr.push(element) });
    return [...realArr,...zerosArr];
}

console.log(JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])), JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
console.log(JSON.stringify(moveZeros([false,1,0,1,2,0,1,3,"a"])) ,JSON.stringify([false,1,1,2,1,3,"a",0,0]));
