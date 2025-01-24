/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser1 = /* GraphQL */ `query GetUser1($id: ID!) {
  getUser1(id: $id) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUser1QueryVariables, APITypes.GetUser1Query>;
export const listUser1s = /* GraphQL */ `query ListUser1s(
  $filter: ModelUser1FilterInput
  $limit: Int
  $nextToken: String
) {
  listUser1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUser1sQueryVariables,
  APITypes.ListUser1sQuery
>;
