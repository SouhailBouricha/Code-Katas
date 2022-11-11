function solution(number){
    const lockUp = {
        1 : "I",
        2 : "II",
        3 : "III",
        4 : "IV",
        5 : "V",
        6 : "VI",
        7 : "VII",
        8 : "VIII",
        9 : "IX",
        10 : "X",
        20 : "XX",
        30 : "XXX",
        40 : "XL",
        50 : "L",
        60 : "LX",
        70 : "LXX",
        80 : "LXXX",
        90 : "XC",
        100 : "C",
        200	 : "CC",	
        300	 : "CCC",
        400	 : "CD",	
        500	 : "D",
        600	 : "DC",	
        700	 : "DCC",	
        800	 : "DCCC",
        900	 : "CM",
        1000 : "M",
    }
    romanNumber = "";
    for(let i = Object.keys(lockUp).length - 1; i > 0; i--){
        if(number >= Object.keys(lockUp)[i]){
            romanNumber += lockUp[Object.keys(lockUp)[i]];
            number -=  Object.keys(lockUp)[i];
            console.log(number,romanNumber,);
        }
        console.log(number,Object.keys(lockUp)[i],lockUp[Object.keys(lockUp)[i]]);
        // console.log(lockUp[Object.keys(lockUp)[i]]);
    }
    console.log(romanNumber);
}

//solution(1)  // 'I', '1 should return "I"'
solution(1001)
//solution(2)  // 'II', '2 should return "II"'
//solution(3)  // 'III', '3 should return "III"'
//solution(4)  // 'IV', '4 should return "IV"'
//solution(5)  // 'V', '5 should return "V"'
//solution(9)  // 'IX', '9 should return "IX"'
//solution(11) //  'XI', '11 should return "XI"'
//solution(19) //  'XIX', '19 should return "XIX"'
//solution(22) //  'XXII', '22 should return "XXII"'
//solution(15) //  'XV', '15 should return "XV"'
