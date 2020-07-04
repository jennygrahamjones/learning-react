# sick fits

## backend

Uses Yoga (an Express GraphQL server) to provide query and mutation resolvers, server side logic, etc, and Prisma (a GraphQL databse interface) for schema definition, CRUD APIs, etc.

`npm start` - Runs with [`nodemon`](https://nodemon.io/).

### Prisma

`npm deploy` - Deploys to [`prisma`](https://www.prisma.io/).

The `datamodel.graphql` defines the basic data models. From this, Prisma generates a `prisma.graphql` file that includes many operations that could be performed on the models and their fields. The Prisma resolvers define the endpoints that are exposed for querying and mutating data, which correlate to the type interfaces defined in `schema.graphql`. The resolvers are provided to the GraphQL Yoga server when it's started.

Prisma also exposes a [GUI including docs and schema](https://eu1.prisma.sh/jenny-graham-jones-363027/sick-fits/dev) that can be used to query and mutate the database. 

## frontend

Uses React.js to build the interface and Apollo client for data management, e.g. local state, performing GraphQL operations.

`npm run dev` or `npm start` - Runs on [`next.js`](https://nextjs.org/).

### React

* `next` to handle links and routing. 
* `styled-components` for the creation of React components.
* `nprogress` to provide a cool progression loading bar on pages.

### Apollo

`react-apollo` provides a client to fetch data from a GraphQL server. The React app is wrapped with an `ApolloProvider`, to give all components the ability to access data provided by the Apollo client, e.g. see `Items.js` populating an `ItemList` based on data retrievd from a GraphQL query that is executed through an Apollo `Query` component.

```JSX
<Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.messages}</p>;
            return (
              <ItemsList>
                {data.items.map(item => (
                  <p key={data.items.indexOf(item)}>{item.title}</p>
                ))}
              </ItemsList>
            );
          }}
</Query>
```