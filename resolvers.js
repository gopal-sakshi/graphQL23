const db34 = require('./db');
const Query = {
    greeting:() => { return "Greetings fellow Madridistas !!!" },
    students:() => db34.students.list(),
    studentById:(root,args,context,info) => { return db34.students.get(args.id); }
}
module.exports = { Query }


/*

greeting, students, studentById  =====> resolvers that handle the query

studentById is a resolverFn with 4 parameters/arguments
- root                  contains the result returned from the resolver on the parent field.
                        contain the Query object itself
- args                  object with the arguments passed into the field in the query.
- context               object shared by all resolvers in a particular query.
- info                  info about execution state of the query


    
*/