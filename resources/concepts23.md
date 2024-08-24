```js

const resolvers = require('./resolvers');
const typeDefs23 = fs.readFileSync('./schema.graphql', { encoding:'utf-8' });
const schema1 = makeExecutableSchema({ typeDefs:typeDefs23, resolvers:resolvers });
app.use('/graphql',graphqlExpress({ schema: schema1 }));


```


1) We take typeDefs & resolvers
2) makeExecutableSchema using both of them
3) provide that schema to /graphql endpoint in EXPRESS
4) 
