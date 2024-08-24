const db34 = require('./db');
const Query = {
    greeting: () => { return `Greetings fellow Madridistas !!! ===> ${Date.now()}` },
    students: () => db34.students.list(),
    studentById: (root,args,context,info) => { return db34.students.get(args.id); },
    sayHello:(root,args,context,info) => `Hellooo ${args.name} !!!`,
    spanishWishes: (root, args, context, info) => { return `Hola ${args.name}`},
    charactersRslvr11: (root, args, context, info) => { return db34.characters.list() },
    singleCharByName11: (root, args, context, info) => { return db34.characters.get(args.id)}
}

const Student23 = {
    fullName: (root,args,context,info) => { return root.firstName + ":" + root.lastName },
    collegeId44: (root) => { return db34.colleges.get(root.collegeId); }
}

const Mutation = {
    createStudent12:(root,args,context,info) => {
        var student23 = {
            collegeId: args.collegeId, 
            firstName: args.firstName, 
            lastName: args.lastName
        }
       return db34.students.create(student23)
    },
    createStudent13:(root,args,context,info) => {
        const id = db34.students.create({
            collegeId: args.collegeId143,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email
        });
        return db34.students.get(id)
    },
    signUp:(root,args,context,info) => {
        const { email, firstName, password } = args.input;
        if(!email.includes('@gmail.com')) throw new Error("email not in proper format")
        if(firstName.length > 15) throw new Error("only 15 characters allowed")
        if(password.length < 4 ) throw new Error("password should be long")
        return "success";
    }
}

module.exports = { Query, Student23, Mutation }


/*

greeting, students, studentById  =====> resolvers that handle the query

studentById is a resolverFn with 4 parameters/arguments
- root                  contains the result returned from the resolver on the parent field.
                        contain the Query object itself
- args                  object with the arguments passed into the field in the query.
- context               object shared by all resolvers in a particular query.
- info                  info about execution state of the query


    
*/