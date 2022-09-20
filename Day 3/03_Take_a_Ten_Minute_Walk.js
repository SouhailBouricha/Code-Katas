function isvalid(walk){
    if(walk.length != 10) return false;
    let s = 0;
    let n = 0;
    let w = 0;
    let e = 0;

    walk.forEach(element => {
        if(element == "s") s++;
        else if(element == "n") n++;
        else if(element == "w") w++;
        else if(element == "e") e++;
    });
    if(s == n && e == w) return true;
    else return false;
}

console.log(isvalid(["n","e","s","w","n","e","s","w","n","s"]));
console.log(isvalid(["n","e","s","w","n","e","s","w","n","e"]));