const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLEnumType } = require("graphql")

const NotificationsFeedItemType = new GraphQLObjectType({
  name: "NotificationsFeedItem",
  // interfaces: [NodeInterface],
  fields: () => ({
    // __id: GlobalIDField,
    // artists: {
    //   type: GraphQLString,
    //   resolve: ({ actors }) => actors,
    // },
    // artworks: {
    //   type: new GraphQLList(Artwork.type),
    //   description: "List of artworks in this notification bundle",
    //   resolve: ({ object_ids }, _options, { artworksLoader }) => {
    //     return artworksLoader({ ids: object_ids })
    //   },
    // },
    // date,
    // message: {
    //   type: GraphQLString,
    // },
    status: {
      type: new GraphQLEnumType({
        name: "NotificationsFeedItemStatus",
        values: {
          READ: {
            value: "read",
          },
          UNREAD: {
            value: "unread",
          },
        },
      }),
    },
    // image: {
    //   type: Image.type,
    //   resolve: ({ object }) =>
    //     object.artists.length > 0 && normalizeImageData(object.artists[0]),
    // },
  }),
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      notification: {
        type: NotificationsFeedItemType,
        resolve: () => ({
          "status": "read"
        })
      }
    })
  })
})

graphql(schema, `
  query {
    notification {
      status
    }
  }
`).then(data => {
  console.log(data)
})