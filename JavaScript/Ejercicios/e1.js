const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
]

function obtainObject(array, objectID) {
    return array.find(object => object.id === objectID);
}

console.log(obtainObject(arrNames, 3));