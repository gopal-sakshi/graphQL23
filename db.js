const { DataStore } = require('notarealdb');

const store = new DataStore('./resources');

module.exports = {
   students:store.collection('students'),
   colleges:store.collection('colleges')
};