import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://crud-frontend-amber.vercel.app/',
  cache: new InMemoryCache(),
});