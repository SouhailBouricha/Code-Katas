function countSmileys(arr) {
    let counter = 0;
    arr.forEach((ele)=>{
        if(ele.length == 2){
            if((ele[0] == ":" || ele[0] == ";") && (ele[1] == ")" || ele[1] == "D")) counter++;
        }
        else if(ele.length == 3){
            if((ele[0] == ":" || ele[0] == ";") && (ele[1] == "-" || ele[1] == "~") && (ele[2] == ")" || ele[2] == "D")) counter++;
        }
    });
    return counter;      
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));