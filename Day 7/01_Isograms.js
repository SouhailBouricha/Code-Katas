function isIsogram(str){
    const lookUp = {};
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(lookUp[element]){
            return false;
        }
        else{
            lookUp[element] = true;
        }
    }
}

console.log(isIsogram("Dermatoglyphics"), true );
console.log(isIsogram("isogram"), true );
console.log(isIsogram("aba"), false, "same chars may not be adjacent" );
console.log(isIsogram("moOse"), false, "same chars may not be same case" );
console.log(isIsogram("isIsogram"), false );
console.log(isIsogram(""), true, "an empty string is a valid isogram" );