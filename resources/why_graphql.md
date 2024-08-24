GraphQL 
- it lets clients define the shape of the response for each request. 
- it removes the complexity of API Endpoint management
    bcoz it exposes a single HTTP Endpoint -- usually </graphql> to fetch the required data.
- It provides clients, the ability to query an object graph (a hierarchical structure of related objects). 
    teams                       -- array of 20 clubs
    team1                       --- full info about team1 
    team1/players               ---- players in the team1
    team1/players1/player1      ---- full info about player1
    the above is hierarchial structure of related objects
- Using GraphQL, clients also get to choose what fields need to be included in the response

`fetch data in 1 request`
GraphQL queries can <traverse related objects> and their fields
letting clients fetch lots of related data in one request
instead of making several roundtrips as one would need in a classic REST architecture.
==================================================================

REST & GraphQL are complementary

When to use REST
- form based CRUD operations -- submit a form
- server to server communication
- if there is going to be one application on single platform
==================================================================