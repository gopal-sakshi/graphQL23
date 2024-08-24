const { DataStore } = require('notarealdb');

const store = new DataStore('./db23');
const starwars = new DataStore('./db24');

module.exports = {
    students: store.collection('students'),
    colleges: store.collection('colleges'),
    characters: starwars.collection('characters'),
    planets: starwars.collection('planets'),
    species: starwars.collection('species'),
    starships: starwars.collection('starships'),
    vehicles: starwars.collection('vehicles'),
};