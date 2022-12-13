function cakes(recipe, available) {
    let count = 0;
    let thin = true;
    while(thin === true){
    for (let i = 0; i < Object.keys(recipe).length; i++) {
        const element = recipe[Object.keys(recipe)[i]];
        const element_2 = available[Object.keys(recipe)[i]];
        if(element > element_2){
            thin = false;
        }
        else{
            available[Object.keys(recipe)[i]] = available[Object.keys(recipe)[i]] - element; 
        }
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
console.log(cakes(recipe, available), 0);