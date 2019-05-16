const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLEnumType } = require("graphql")
const { mergeSchemas } = require("graphql-tools")

const shouldRepro = process.argv[2] === "--repro"

const NotificationsFeedItemType = new GraphQLObjectType({
  name: "NotificationsFeedItem",
  fields: () => ({
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
  }),
})

const originalSchema = new GraphQLSchema({
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

const mergedSchema = mergeSchemas({ schemas: [originalSchema] })

graphql(shouldRepro ? mergedSchema : originalSchema, `
  query {
    notification {
      status
    }
  }
`).then(data => {
  console.log(data)
})