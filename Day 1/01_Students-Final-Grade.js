// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    let finaleGrade;
    if(exam > 90 || projects > 10) finaleGrade = 100;
    else if(exam > 75 && projects >=5) finaleGrade =  90;
    else if(exam > 50 && projects >=2) finaleGrade = 75;
    else finaleGrade = 0;
    return finaleGrade;
}

console.log(finalGrade(100,12))
console.log(finalGrade(99,0))
console.log(finalGrade(10,15))
console.log(finalGrade(85,5))
console.log(finalGrade(55,3))
console.log(finalGrade(55,0))
console.log(finalGrade(20,2))