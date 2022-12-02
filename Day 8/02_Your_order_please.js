function order(words){
    let luckUp = {"1": true,"2": true,"3": true,"4": true,"5": true,"6": true,"7": true,"8": true,"9": true,}
    let newWord = "";
    let check_Number = (word) =>{
        for (let i = 0; i < word.length; i++) {
            const element = word[i];
            if(luckUp[element]){
                luckUp[element] = word;
            }
        }
    }
    words.split(" ").forEach(element => {
        check_Number(element);
    });
    for (let i = 0; i < Object.keys(luckUp).length; i++) {
        const element = luckUp[Object.keys(luckUp)[i]];
        if(element !== true){
            newWord = newWord + element + " ";
        }
    }
    return newWord.trim();
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est",order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople",order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est")
console.log(order(""), "", "empty input should return empty string",order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est")