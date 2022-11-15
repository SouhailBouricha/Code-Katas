function songDecoder(song){
    let space = 0;
    let word = "";
    song.split("WUB").forEach(element => {
        if(element !== ""){
            word += element;
            space = 0;
        }
        else if(element === "" && space === 0){
            word += " ";
            space = 1;
        }
    });
    return word;
}

console.log(songDecoder("AWUBBWUBC"), "A B C", songDecoder("AWUBBWUBC") == "A B C");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C",songDecoder("AWUBWUBWUBBWUBWUBWUBC") == "A B C");
console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C",songDecoder("WUBAWUBBWUBCWUB") == "A B C");

// console.log(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
// console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
// console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
