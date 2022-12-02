function nbYear(p0, percent, aug, p) {
    let RealPercent = percent * 0.01;
    let population = 0;
    let year = 0;
    while(population < p){
        population = p0 + p0 * RealPercent + aug;
        p0 = population;
        year++;
    }
    return year;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);