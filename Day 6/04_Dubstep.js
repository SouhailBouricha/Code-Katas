function songDecoder(song){
    let word = "";
    song.split("WUB").forEach((element, id, array) => {
        if(element !== ""){
            if(id !== array.length - 1){
                word += element + " ";
            }
            else{
                word += element;
            }
        }
    });
    return word.trim();
}

console.log(songDecoder("AWUBBWUBC"), "A B C", songDecoder("AWUBBWUBC") == "A B C");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C",songDecoder("AWUBWUBWUBBWUBWUBWUBC") == "A B C");
console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C",songDecoder("WUBAWUBBWUBCWUB") == "A B C");


