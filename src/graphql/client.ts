import { GraphQLClient } from "graphql-request";

const GRAPHQL_URI =
  "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const client = new GraphQLClient(GRAPHQL_URI);
