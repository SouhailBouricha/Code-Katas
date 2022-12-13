function cakes(recipe, available) {
    let count = 0;
    let thin = true;
    let numberLength = Object.keys(recipe).length > Object.keys(available).length ? Object.keys(recipe).length : Object.keys(available).length;
    while(thin === true){
        for (let i = 0; i < numberLength; i++) {
            const recipeElement = recipe[Object.keys(recipe)[i]] ? recipe[Object.keys(recipe)[i]] : 0;
            const availableElement = available[Object.keys(available)[i]] ? available[Object.keys(available)[i]] : 0;
            if(recipeElement <= availableElement){
                available[Object.keys(available)[i]] = available[Object.keys(available)[i]] - recipeElement;
            }
            else{
                thin = false;
            }
            // console.log(recipeElement,availableElement,available,count);        
        } 
        count++;
    }
    return count;
}



let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available),0);