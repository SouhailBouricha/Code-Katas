function DNAStrand(dna){
    let word = '';
    let dict = {
        T:"A",
        A:"T",
        C:"G",
        G:"C",
    }
    dna.split("").forEach(element => {
       word += dict[element]; 
    });
    console.log(word);
}

DNAStrand("AAAA");