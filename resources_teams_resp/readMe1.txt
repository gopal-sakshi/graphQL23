say you are building some NFL app
using REST -- these would be the endpoints

api/teams/
api/teams/1
api/teams/1/roster/

In mobile app space is minimum
In Desktop -- more space, means we want to show height & weight also

Sol1 = develop 2 APIs
    one API for desktop -- which sends height & weight info
    2nd API for mobile --- which doesnt send height & weight

Sol2 = use the same API, but ignore the fields in mobile
but this leads to over-fetching of data 