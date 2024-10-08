/********************** EXPRESS SERVER SETUP ********************************/
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const port = process.env.PORT || 3079;
const app = express();
app.use(cors(), bodyParser.json());
app.listen(port, () => console.info(`Server started on port ${port}`));
/**************************************************************************/



/************************** EXECUTABLE SCHEMA ***********************************/
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const resolvers = require('./resolvers');
const typeDefs23 = fs.readFileSync('./schema.graphql', { encoding:'utf-8' });
const typeDefinition = `type Query  { greeting: String }`;
const  resolverObject = { Query : { greeting: () => `Greetings !!! ${Date.now()} ` } };
const { makeExecutableSchema } = require('graphql-tools');
const schema1 = makeExecutableSchema({typeDefs:typeDefs23, resolvers:resolvers});
const schema2 = makeExecutableSchema({typeDefs:typeDefinition, resolvers:resolverObject});

app.use('/graphql',graphqlExpress({ schema: schema1 }));
app.use('/graphiql',graphiqlExpress({ endpointURL:'/graphql' }));

/************************************************************************/