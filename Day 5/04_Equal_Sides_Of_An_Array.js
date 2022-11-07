function findEvenIndex(arr){
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = array[i];
        console.log(arr.slice(i));
    }
}

findEvenIndex([1,2,3,4,3,2,1]) //3
findEvenIndex([1,100,50,-51,1,1]) //1
findEvenIndex([1,2,3,4,5,6]) //-1
findEvenIndex([20,10,30,10,10,15,35]) //3