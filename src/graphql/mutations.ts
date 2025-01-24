/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser1 = /* GraphQL */ `mutation CreateUser1(
  $input: CreateUser1Input!
  $condition: ModelUser1ConditionInput
) {
  createUser1(input: $input, condition: $condition) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUser1MutationVariables,
  APITypes.CreateUser1Mutation
>;
export const updateUser1 = /* GraphQL */ `mutation UpdateUser1(
  $input: UpdateUser1Input!
  $condition: ModelUser1ConditionInput
) {
  updateUser1(input: $input, condition: $condition) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUser1MutationVariables,
  APITypes.UpdateUser1Mutation
>;
export const deleteUser1 = /* GraphQL */ `mutation DeleteUser1(
  $input: DeleteUser1Input!
  $condition: ModelUser1ConditionInput
) {
  deleteUser1(input: $input, condition: $condition) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUser1MutationVariables,
  APITypes.DeleteUser1Mutation
>;
