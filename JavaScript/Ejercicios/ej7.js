function returnFalsyValues(obj, fn) {
    let newObj = {};
    for (const [key, value] of Object.entries(obj)) {
        if(!fn(value)) {
            newObj[key] = value;
        }
    }

    return newObj;
}

console.log(returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string'));