function createPhoneNumber(numbers){
    let phoneNumber = "";
    numbers.forEach((element,id) => {
        if(id == 0){
            console.log(element,id);
        }
    });
}



createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // (123) 456-7890
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // (111) 111-1111
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // (123) 456-7890