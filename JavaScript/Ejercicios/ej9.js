function keysToLowerCase(obj) {
    let newObj = {};    

    for (const [key, value] of Object.entries(obj)) {
        newObj[key.toLowerCase()] = value;
    }

    return newObj;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = keysToLowerCase(myObject);
console.log(myObjLowercase);