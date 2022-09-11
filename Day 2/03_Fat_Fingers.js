var fatFingers = function(str) {
    let result = "";
    let iscap = false;
    if(str == null) return null;
    let counter = str.length;
    for(i = 0; i < counter; i++){
        if(str[i] == "a" || str[i] == "A"){
            iscap == false ? iscap = true : iscap = false;
            console.log("g")
        }
        else {
            if(iscap == true ){
                if(str[i] == str[i].toUpperCase()){
                    result+=str[i].toLowerCase();
                }
                else{
                    result+=str[i].toUpperCase();
                }
                console.log("a");
            }
            else if(iscap == false){
                result+=str[i];
                console.log("z");
            }
            else{
                result+=str[i]; 
        }
    }
}
    return result ? result : "";
};

console.log(fatFingers("abABaBabAb")); //BBbbB
