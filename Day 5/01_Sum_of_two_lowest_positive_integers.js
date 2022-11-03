function sumTwoSmallestNumbers(numbers) {  
    let smallest;
    let secondesmallest;
    if(numbers[0] < numbers[1]){
        smallest = numbers[0];
        secondesmallest = numbers[1];
    }    
    else{
        smallest = numbers[1];
        secondesmallest = numbers[0];
    }
    for (let i = 2; i < numbers.length; i++) {
        if(numbers[i] < smallest){
            secondesmallest = smallest;
            smallest = numbers[i];
        }
        else if(numbers[i] < secondesmallest){
            secondesmallest = numbers[i] 
        }
    }
    // return smallest + secondesmallest;
    console.log(smallest + secondesmallest);
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]); //"Sum should be 13"
sumTwoSmallestNumbers([15, 28, 4, 2, 43]); //"Sum should be 6"
sumTwoSmallestNumbers([3, 87, 45, 12, 7]); // "Sum should be 10"
sumTwoSmallestNumbers([23, 71, 33, 82, 1]); //"Sum should be 24"
sumTwoSmallestNumbers([52, 76, 14, 12, 4]); //"Sum should be 16"


