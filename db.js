const { DataStore } = require('notarealdb');

const store = new DataStore('./db23');

module.exports = {
   students:store.collection('students'),
   colleges:store.collection('colleges')
};