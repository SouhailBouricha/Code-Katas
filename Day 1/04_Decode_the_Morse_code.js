decodeMorse = function(morseCode){
    let str  = morseCode.trim();
    console.log(morseCode);
    console.log(str);
    let name = "";
    let value = "";
    let i = 0;
    for(let j = 0; j < str.length; j++){
      if(str[j] == " "){
        i++;
        if(value != ""){
          name += MORSE_CODE[value];
        }
        if(i === 3){
          name += " ";
        }
//         console.log("123",MORSE_CODE['-..'],i,value,MORSE_CODE[value],name);
        value = '';
      }
      else{
        i = 0;
        value += str[j]; 
//         console.log(str[j],MORSE_CODE['.'],i,value);
        if(j == str.length - 1){
          name += MORSE_CODE[value];
        }
      }
    }
  return name;
}