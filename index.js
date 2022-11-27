
/*
This creates a very basic Apollo server with a minimal GraphQL schema.
Not good practice to put everything into the same file, but as this is a demo.
*/


const { ApolloServer, gql } = require('apollo-server');

const data = {
  "beasts": [
    {
	    "id": "md",
	    "legs": 6,
	    "binomial": "Musca domestica",
	    "commonName": "housefly",
    },
    {
	    "id": "nr",
	    "legs": 8,
	    "binomial": "Neriene radiata",
	    "commonName": "filmy dome spider",
    },
    {
	    "id": "cc",
	    "legs": 2,
	    "binomial": "Corvus corone",
	    "commonName": "carrion crow",
    },
    {
	    "id": "fc",
	    "legs": 4,
	    "binomial": "Felis catus",
	    "commonName": "cat",
    }
  ]
};

const typeDefs = gql`
	type Beast {
		id: ID
		legs: Int
		binomial: String
		commonName: String
	}

	type Query {
		beasts: [Beast]
	}
`;

const resolvers = {
	Query: {
		// Returns array of all beasts.
		beasts: () => data.beasts
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(4000);