const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`

  type Query {
    color: AllowedColor
  }

  enum AllowedColor {
    RED
    GREEN
    BLUE
  }
`

const resolvers = {
  Query: {
    color: () => '#f00'
  },
  AllowedColor: {
    RED: '#f00',
    GREEN: '#0f0',
    BLUE: '#00f',
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
