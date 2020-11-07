import { gql } from 'apollo-server-express';

const typeDefs = gql`
  # Directives
  directive @auth on FIELD_DEFINITION
  directive @paginate on FIELD_DEFINITION

  # Custom scalar
  scalar Date

  # Types
  type Query {
    # All queries
    helloWorld: String
  }

  type Mutation {
    # All mutations
    # @auth means it'll return unauthorized
    # if a valid token is not given in the authorization header
    helloWorld: String @auth
  }

  # Common
  # Types
  # Pagination params
  type Info {
    prev: Int
    next: Int
    count: Int!
    pages: Int!
  }

  # Inputs
  input QueryParams {
    page: Int!
    pageSize: Int!
  }

  # User
  # Types

  # Inputs

  # Enums
`;

export default typeDefs;
