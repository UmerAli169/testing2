/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUser1Input = {
  id?: string | null,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUser1ConditionInput = {
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUser1ConditionInput | null > | null,
  or?: Array< ModelUser1ConditionInput | null > | null,
  not?: ModelUser1ConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User1 = {
  __typename: "User1",
  id: string,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateUser1Input = {
  id: string,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUser1Input = {
  id: string,
};

export type ModelUser1FilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUser1FilterInput | null > | null,
  or?: Array< ModelUser1FilterInput | null > | null,
  not?: ModelUser1FilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUser1Connection = {
  __typename: "ModelUser1Connection",
  items:  Array<User1 | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUser1FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUser1FilterInput | null > | null,
  or?: Array< ModelSubscriptionUser1FilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUser1MutationVariables = {
  input: CreateUser1Input,
  condition?: ModelUser1ConditionInput | null,
};

export type CreateUser1Mutation = {
  createUser1?:  {
    __typename: "User1",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateUser1MutationVariables = {
  input: UpdateUser1Input,
  condition?: ModelUser1ConditionInput | null,
};

export type UpdateUser1Mutation = {
  updateUser1?:  {
    __typename: "User1",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteUser1MutationVariables = {
  input: DeleteUser1Input,
  condition?: ModelUser1ConditionInput | null,
};

export type DeleteUser1Mutation = {
  deleteUser1?:  {
    __typename: "User1",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetUser1QueryVariables = {
  id: string,
};

export type GetUser1Query = {
  getUser1?:  {
    __typename: "User1",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListUser1sQueryVariables = {
  filter?: ModelUser1FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUser1sQuery = {
  listUser1s?:  {
    __typename: "ModelUser1Connection",
    items:  Array< {
      __typename: "User1",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUser1SubscriptionVariables = {
  filter?: ModelSubscriptionUser1FilterInput | null,
};

export type OnCreateUser1Subscription = {
  onCreateUser1?:  {
    __typename: "User1",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateUser1SubscriptionVariables = {
  filter?: ModelSubscriptionUser1FilterInput | null,
};

export type OnUpdateUser1Subscription = {
  onUpdateUser1?:  {
    __typename: "User1",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteUser1SubscriptionVariables = {
  filter?: ModelSubscriptionUser1FilterInput | null,
};

export type OnDeleteUser1Subscription = {
  onDeleteUser1?:  {
    __typename: "User1",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
