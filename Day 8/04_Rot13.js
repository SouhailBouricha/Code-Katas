function rot13(message){
    const luckUp = {"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26,}
    const luckUpMin = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26,}
    let newWord = "";
    for (let i = 0; i < message.length; i++) {
        const letter  = message[i];
        if(luckUp[letter] || luckUpMin[letter]){
            if(letter === letter.toUpperCase()){
                if(luckUp[letter] > 13){
                    newWord += Object.keys(luckUp)[luckUp[letter] - 1 - 13];
                }
                else{
                    newWord += Object.keys(luckUp)[luckUp[letter] - 1 + 13];
                }
            }
            else if(letter === letter.toLowerCase()){
                if(luckUpMin[letter] > 13){
                    newWord += Object.keys(luckUpMin)[luckUpMin[letter] - 1 - 13];
                }
                else{
                    newWord += Object.keys(luckUpMin)[luckUpMin[letter] - 1 + 13];
                }
            }
        } 
        else{
            newWord += letter;
        }      
    }
    return newWord;
}


console.log(rot13("HELLO"),"URYYB","URYYB" === rot13("HELLO"));
console.log(rot13("clerk"),"pyrex","pyrex" === rot13("clerk"));
console.log(rot13("furby"),"sheol","sheol" === rot13("furby"));
console.log(rot13("TerRa"),"GreEn","GreEn" === rot13("TerRa"));