function JadenCasing(str){
    let result = "";
    str.split(" ").map((word,index) =>{
        if(str.split(" ").length -1 == index){
            result += word[0].toUpperCase() + word.slice(1,);
        }
        else{
            result += word[0].toUpperCase() + word.slice(1,) + ' ';
        }
    });
    return result;
}

console.log(JadenCasing("Frdv rfezf ryj ryj uilk"));
