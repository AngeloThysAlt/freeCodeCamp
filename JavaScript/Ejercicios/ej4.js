//un array sin duplicidades.

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

function noDuplicates(...arrays) {
    const newArr = [];

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            if (!newArr.includes(arrays[i][j])) {
                newArr.push(arrays[i][j]);
            }
        }
    }

    return newArr;
}

console.log(noDuplicates(arrNumber1, arrNumber2, arrNumber3));

//un array con la intersección de x cantidad de arrays.

const arrNumber4 = [1,2,3];
const arrNumber5 = [1,2,3,4,5];
const arrNumber6 = [1,4,7,2];

function duplicates(...arrays) {
    const newArr = [...arrays[0]];

    for (let i = 1; i < arrays.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (!arrays[i].includes(newArr[j])) {
                newArr.splice(newArr.indexOf(arrays[j]), 1);
            }
        }
    }

    return newArr;
}

console.log(duplicates(arrNumber4, arrNumber5, arrNumber6));