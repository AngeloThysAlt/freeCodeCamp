//Sólo números

const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test'];

function cleaner(array) {
    let cleanArray = [...array];

    return cleanArray.filter(element => Number.isFinite(element));
}

console.log(cleaner(arrDirty));

//Sólo valores truthy

const arrDirty2 = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test'];

function cleaner2(array) {
    let cleanArray = [...array];

    return cleanArray.filter(element => element);
}

console.log(cleaner2(arrDirty2));