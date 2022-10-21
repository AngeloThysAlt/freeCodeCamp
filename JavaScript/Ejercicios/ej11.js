function splitter(arr, len) {
    const tempArr = [...arr];
    const newArr = [];

    while (tempArr.length > 0) {
        newArr.push(tempArr.splice(0, len));
    }
    
    return newArr;
}

const result = splitter([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);