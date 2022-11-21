function toCamelCase(str){
    let newWord = "";
    let isCapital = false;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element === "-" || element === "_"){
            isCapital = true;
        }
        else if (isCapital === true){
            newWord += element.toUpperCase();
            isCapital = false;
        }
        else{
            newWord += element;
        }
    }
    return newWord;
}

console.log(toCamelCase(''), '',toCamelCase('') === '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"),toCamelCase("the_stealth_warrior") === "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"),toCamelCase("The-Stealth-Warrior") === "TheStealthWarrior", "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"),toCamelCase("A-B-C") === "ABC", "ABC", "toCamelCase('A-B-C') did not return correct value")