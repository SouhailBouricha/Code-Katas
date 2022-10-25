function scramble(str1, str2) {
    let id = 0;
    str2.split('').forEach(element => {
        let c = 0;
        for (let i = 0; i < str1.length; i++) {
            if(element == str1[i]) {
                c++;
            }
        }
        if(c == 0){
            id++
        }
    });
    return id > 0 ? false : true;
}
// 
console.log(scramble('rkqodlw', 'world')); 
console.log(scramble('cedewaraaossoqqyt', 'codewars')); 
console.log(scramble('katas', 'steak')); 
   