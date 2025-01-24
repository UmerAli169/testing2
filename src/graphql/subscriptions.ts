/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateAddProduct = /* GraphQL */ `subscription OnCreateAddProduct(
  $filter: ModelSubscriptionAddProductFilterInput
) {
  onCreateAddProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddProductSubscriptionVariables,
  APITypes.OnCreateAddProductSubscription
>;
export const onUpdateAddProduct = /* GraphQL */ `subscription OnUpdateAddProduct(
  $filter: ModelSubscriptionAddProductFilterInput
) {
  onUpdateAddProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddProductSubscriptionVariables,
  APITypes.OnUpdateAddProductSubscription
>;
export const onDeleteAddProduct = /* GraphQL */ `subscription OnDeleteAddProduct(
  $filter: ModelSubscriptionAddProductFilterInput
) {
  onDeleteAddProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddProductSubscriptionVariables,
  APITypes.OnDeleteAddProductSubscription
>;
