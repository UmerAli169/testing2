/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser1 = /* GraphQL */ `subscription OnCreateUser1($filter: ModelSubscriptionUser1FilterInput) {
  onCreateUser1(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUser1SubscriptionVariables,
  APITypes.OnCreateUser1Subscription
>;
export const onUpdateUser1 = /* GraphQL */ `subscription OnUpdateUser1($filter: ModelSubscriptionUser1FilterInput) {
  onUpdateUser1(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUser1SubscriptionVariables,
  APITypes.OnUpdateUser1Subscription
>;
export const onDeleteUser1 = /* GraphQL */ `subscription OnDeleteUser1($filter: ModelSubscriptionUser1FilterInput) {
  onDeleteUser1(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUser1SubscriptionVariables,
  APITypes.OnDeleteUser1Subscription
>;
