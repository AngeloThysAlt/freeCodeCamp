const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
]

function spanishOrNot(arr) {
    const newArr = [...arr];

    return newArr
                .filter(object => !object.capital)
                .map(object => ({city: object.city, isSpain: object.country === 'Spain'}));
}

console.log(spanishOrNot(arrCities2));