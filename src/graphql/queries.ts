/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    createdAt
    updatedAt
    AddedProduct {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getAddProduct = /* GraphQL */ `query GetAddProduct($id: ID!) {
  getAddProduct(id: $id) {
    id
    category
    productName
    price
    description
    size
    color
    imageKey
    createdAt
    updatedAt
    user {
      id
      email
      createdAt
      updatedAt
      __typename
    }
    userId
    userAddedProductId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAddProductQueryVariables,
  APITypes.GetAddProductQuery
>;
export const listAddProducts = /* GraphQL */ `query ListAddProducts(
  $filter: ModelAddProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      productName
      price
      description
      size
      color
      imageKey
      createdAt
      updatedAt
      userId
      userAddedProductId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddProductsQueryVariables,
  APITypes.ListAddProductsQuery
>;
