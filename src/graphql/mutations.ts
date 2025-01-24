/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createAddProduct = /* GraphQL */ `mutation CreateAddProduct(
  $input: CreateAddProductInput!
  $condition: ModelAddProductConditionInput
) {
  createAddProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAddProductMutationVariables,
  APITypes.CreateAddProductMutation
>;
export const updateAddProduct = /* GraphQL */ `mutation UpdateAddProduct(
  $input: UpdateAddProductInput!
  $condition: ModelAddProductConditionInput
) {
  updateAddProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAddProductMutationVariables,
  APITypes.UpdateAddProductMutation
>;
export const deleteAddProduct = /* GraphQL */ `mutation DeleteAddProduct(
  $input: DeleteAddProductInput!
  $condition: ModelAddProductConditionInput
) {
  deleteAddProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAddProductMutationVariables,
  APITypes.DeleteAddProductMutation
>;
