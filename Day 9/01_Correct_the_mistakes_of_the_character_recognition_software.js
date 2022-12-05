function correct(string){
	return string.split("").reduce((word,letter) =>{
        if(letter !== "0" && letter !== "5" && letter !== "1"){
            return word += letter;
        }
        else if(letter === "5"){
            return word += "S";
        }
        else if(letter === "1"){
            return word += "I";
        }
        else{
            return word += "O";
        }
    },"");
}

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");