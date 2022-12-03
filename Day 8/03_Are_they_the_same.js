function comp(array1, array2){
    if(!array1 || !array2){
        return false;
    }
    const countElements = (element,array) =>{
        let id = 0;
        for (let i = 0; i < array.length; i++) {
            const Newelement = array[i];
            if(Newelement === element){
                id++;
            }
        }
        return id;
    }
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        if(countElements(element,array1) !== countElements(element * element, array2)){
            return false;
        }
    }
    return true;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2),true);
console.log(comp([2, 2, 3],[4, 9, 9]),false);