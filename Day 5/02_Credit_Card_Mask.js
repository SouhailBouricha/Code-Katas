// return masked string
function maskify(cc) {
    if(cc.length > 4){
        let id = 4;
        let newWord = "";
        for (let i = cc.length - 1; i >= 0; i--) {
            if(id > 0){
                newWord = cc[i] + newWord;
            }
            else{
                newWord =  "#" + newWord;
            }
            id--;
        }
        return newWord;
    }
    else{
        return cc;
    }
}
maskify('4556364607935616') // ############5616
maskify('1') // 1
maskify('11111') // #1111
