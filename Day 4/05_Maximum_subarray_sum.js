var maxSequence = function(array){
    let max = 0
    for (let i = 0; i <= array.length; i++) {
        for (let left = 0, right = i; left < array.length, right < array.length; left++, right++) {
            let element = 0;
            for (let j = 0; j < array.slice(left, right + 1).length; j++) {
                element = element + array.slice(left, right + 1)[j];
            }
            if(max < element){
                max = element
            }
        }
    }
    return max;
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
