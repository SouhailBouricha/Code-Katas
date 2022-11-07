function findEvenIndex(arr){
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        leftSum = leftSum + arr[i];
        const sum = arr.slice(i).reduce((partialSum, a) => partialSum + a, 0);
        if(leftSum === sum){
            return i;
        }
        // console.log(leftSum,sum,arr.slice(i));
    }
    return -1;
}
console.log(findEvenIndex([1,2,3,4,3,2,1])); //3
console.log(findEvenIndex([1,100,50,-51,1,1])); //1
console.log(findEvenIndex([1,2,3,4,5,6])); //-1
console.log(findEvenIndex([20,10,30,10,10,15,35])); //3
console.log(findEvenIndex([20,10,-80,10,10,15,35])); //0