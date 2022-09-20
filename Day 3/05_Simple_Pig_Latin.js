function pigIt(str){
    return str.split(" ").map(element => {
        if(element == "!" || element == "." || element == "?") return element;
        else return `${element.slice(1,)}${element[0]}ay`;
    }).join(" ");
}

console.log(pigIt("Pig latin is cool"));
console.log("--------------------");
console.log(pigIt("This is my string"));
console.log("--------------------");
console.log(pigIt("Hello world !"));