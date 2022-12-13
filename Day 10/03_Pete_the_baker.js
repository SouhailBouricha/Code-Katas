function cakes(recipe, available) {
    let count = Math.floor(available[Object.keys(recipe)[0]] / recipe[Object.keys(recipe)[0]]) >= 0 ? Math.floor(available[Object.keys(recipe)[0]] / recipe[Object.keys(recipe)[0]]) : 0;
        for (let i = 0; i < Object.keys(recipe).length; i++) {
            const recipeElement = recipe[Object.keys(recipe)[i]] ? recipe[Object.keys(recipe)[i]] : 0;
            const availableElement = available[Object.keys(recipe)[i]] ? available[Object.keys(recipe)[i]] : 0;
            if((availableElement / recipeElement) < count){
                count  = Math.floor(availableElement / recipeElement);
            }   
        } 
    return count;
}



let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available),0);