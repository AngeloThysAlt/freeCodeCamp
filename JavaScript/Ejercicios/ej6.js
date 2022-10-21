let test1 = 2.444;
let test2 = 4.89032;

function roundTo(float, decimals) {
    return Math.round(float * 10 ** decimals) / 10 ** decimals;
}

console.log(roundTo(test1, 1));
console.log(roundTo(test2, 4));
