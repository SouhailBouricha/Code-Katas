function anagrams(word, words) {
    const anagrams = [];
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        let yes = 0;
        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            if(element.split(letter).length - 1 === word.split(letter).length - 1){
                yes++;
            }
        }
        yes === element.length ? anagrams.push(element) : 0
    }
    return anagrams;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);