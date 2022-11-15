function getSum( a,b ){
   let start = Math.min(b,a);
   let end = Math.max(b,a);
   let sum = 0;
   for (let i = start; i < end + 1; i++) {
        sum += i;
   }
   console.log(sum);
}

getSum(1,5)    // --> 15 (1 + 2 + 3 + 4 + 5 = 15)
getSum(1, 0)   // --> 1 (1 + 0 = 1)
getSum(1, 2)   // --> 3 (1 + 2 = 3)
getSum(0, 1)   // --> 1 (0 + 1 = 1)
getSum(1, 1)   // --> 1 (1 since both are same)
getSum(-1, 0)  //  --> -1 (-1 + 0 = -1)
getSum(-1, 2)  //  --> 2 (-1 + 0 + 1 + 2 = 2)