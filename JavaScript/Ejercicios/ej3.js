const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
]

function cities(array, country, capital) {
    const newArr = [...array];

    return newArr.filter(object => {
        return object.country === country 
                && object.capital === capital
    });
}

console.log(cities(arrCities, 'Spain', false));