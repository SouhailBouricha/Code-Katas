function narcissistic(value) {
    let base = String(value).length;
    let Result = String(value).split("").reduce((sum,element) => sum += (Number(element) ** base), 0);
    return value === Result ? true : false;
}
console.log(narcissistic(7), true, "7 is narcissistic" );
console.log(narcissistic(371), true, "371 is narcissistic" );
console.log( narcissistic( 23 ), false, '23 is not narcissistic' );
console.log( narcissistic( 153 ), true, '153 is narcissistic' );
console.log( narcissistic( 1634 ), true, '1634 is narcissistic' );
