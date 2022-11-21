function solution(number){
  let numbers = [];
  for (let i = 1; i < number; i++) {
    if(i % 5 === 0){
        numbers.push(i)
    }
    else if(i % 3 === 0){
        numbers.push(i)
    }
  }
  return numbers.reduce((sum,element) => sum += element,0);
}


console.log(solution(10));
console.log(solution(100));
