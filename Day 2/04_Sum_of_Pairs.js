// function sumPairs(ints, s) {
//     let result = [];
//     let indexPairs = [];
//     for (let i = 0; i < ints.length; i++) {
//         for (let j = i + 1; j < ints.length; j++) {
//                 if(ints[i] + ints[j] == s && i != j){
//                     if(indexPairs.includes(`${[i,j].sort()}`) == false){
//                         // console.log(indexPairs.includes([i,j].sort()));
//                         indexPairs.push(`${[i,j].sort()}`);
//                         result.push([ints[i],ints[j],j]);
//                     }
//                 }
//         } 
//     }
//     if(result.length > 0){
//         let minIndex = result[0][2];
//         let arr = [result[0][0],result[0][1]];
//         result.forEach((e) =>{
//             if(e[2] < minIndex){
//                 minIndex = e[2];
//                 arr = [e[0],e[1]];
//             }
//         });
//         return arr;
//     }
//     else{
//         return undefined;
//    }
// }

function sumPairs(ints, s) {
    let firstNbs = {};
    let isfind = false;
    let result = []
    try{
        ints.forEach(element => {
            let newNb = s - element;
            // console.log(firstNbs,element,newNb);
            for(n in firstNbs){
                if(Number(n) == newNb){
                    isfind = true;
                    result.push(element);
                    result.push(Number(n));
                }
            }
            if(isfind){
                throw 'Break';
            }
            else{
                firstNbs[element] = true;
            }
       });
    }
    catch{
        return result;
    }
}
console.log(sumPairs([11, 3,7, 5],10));
console.log(sumPairs([4, 3, 2, 3, 4],6));
console.log(sumPairs([0, 0, -2, 3], 2));
console.log(sumPairs([10, 5, 2, 3, 7, 5],10));
// let array = [
//     13, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//      1, 1, 1, 1
//   ]
// for (let i = 0; i < 4999900 ; i++) {
//     array.push(1);
// }

// console.log(array);
// console.log(sumPairs(array,13));

// let firstNbs = {7:"v"};

// console.log(firstNbs[5]);