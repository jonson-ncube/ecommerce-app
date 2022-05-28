const { ApolloServer, gql } = require('apollo-server')

//Scaler types :: String, Boolean, Int, Float, ID
//Object types :: [Arrays],{Objects`}

const typeDefs = gql`
	type Query {
		products: [Product!]!
	}

	type Product {
		name: String!
		description: String!
		quantity: Int!
		price: Float!
		onSale: Boolean!
	}
`

const resolvers = {
	Query: {
		products: () => {
			return [
				{
					name: 'Bike',
					description: 'Mountain',
					quantity: 20,
					price: 99.99,
					onSale: false,
				},
			]
		},
	},
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

server.listen().then(({ url }) => console.log('server is ready at ' + url))
