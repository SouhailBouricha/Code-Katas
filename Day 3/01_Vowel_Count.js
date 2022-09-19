function getCount(str) {
    let Count = 0;
    str.split("").forEach(element => {
        if(element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
            Count++;
        }
    });
    return Count;
}

getCount("abracadabra");