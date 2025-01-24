/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  AddedProduct?: ModelAddProductConnection | null,
};

export type ModelAddProductConnection = {
  __typename: "ModelAddProductConnection",
  items:  Array<AddProduct | null >,
  nextToken?: string | null,
};

export type AddProduct = {
  __typename: "AddProduct",
  id: string,
  category?: string | null,
  productName?: string | null,
  price?: number | null,
  description?: string | null,
  size?: string | null,
  color?: string | null,
  imageKey?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  userId?: string | null,
  userAddedProductId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAddProductInput = {
  id?: string | null,
  category?: string | null,
  productName?: string | null,
  price?: number | null,
  description?: string | null,
  size?: string | null,
  color?: string | null,
  imageKey?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
  userAddedProductId?: string | null,
};

export type ModelAddProductConditionInput = {
  category?: ModelStringInput | null,
  productName?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  size?: ModelStringInput | null,
  color?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAddProductConditionInput | null > | null,
  or?: Array< ModelAddProductConditionInput | null > | null,
  not?: ModelAddProductConditionInput | null,
  userAddedProductId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type UpdateAddProductInput = {
  id: string,
  category?: string | null,
  productName?: string | null,
  price?: number | null,
  description?: string | null,
  size?: string | null,
  color?: string | null,
  imageKey?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
  userAddedProductId?: string | null,
};

export type DeleteAddProductInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAddProductFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  productName?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  size?: ModelStringInput | null,
  color?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAddProductFilterInput | null > | null,
  or?: Array< ModelAddProductFilterInput | null > | null,
  not?: ModelAddProductFilterInput | null,
  userAddedProductId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userAddedProductId?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionAddProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  category?: ModelSubscriptionStringInput | null,
  productName?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  size?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAddProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddProductFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    AddedProduct?:  {
      __typename: "ModelAddProductConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    AddedProduct?:  {
      __typename: "ModelAddProductConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    AddedProduct?:  {
      __typename: "ModelAddProductConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateAddProductMutationVariables = {
  input: CreateAddProductInput,
  condition?: ModelAddProductConditionInput | null,
};

export type CreateAddProductMutation = {
  createAddProduct?:  {
    __typename: "AddProduct",
    id: string,
    category?: string | null,
    productName?: string | null,
    price?: number | null,
    description?: string | null,
    size?: string | null,
    color?: string | null,
    imageKey?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userAddedProductId?: string | null,
  } | null,
};

export type UpdateAddProductMutationVariables = {
  input: UpdateAddProductInput,
  condition?: ModelAddProductConditionInput | null,
};

export type UpdateAddProductMutation = {
  updateAddProduct?:  {
    __typename: "AddProduct",
    id: string,
    category?: string | null,
    productName?: string | null,
    price?: number | null,
    description?: string | null,
    size?: string | null,
    color?: string | null,
    imageKey?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userAddedProductId?: string | null,
  } | null,
};

export type DeleteAddProductMutationVariables = {
  input: DeleteAddProductInput,
  condition?: ModelAddProductConditionInput | null,
};

export type DeleteAddProductMutation = {
  deleteAddProduct?:  {
    __typename: "AddProduct",
    id: string,
    category?: string | null,
    productName?: string | null,
    price?: number | null,
    description?: string | null,
    size?: string | null,
    color?: string | null,
    imageKey?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userAddedProductId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    AddedProduct?:  {
      __typename: "ModelAddProductConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAddProductQueryVariables = {
  id: string,
};

export type GetAddProductQuery = {
  getAddProduct?:  {
    __typename: "AddProduct",
    id: string,
    category?: string | null,
    productName?: string | null,
    price?: number | null,
    description?: string | null,
    size?: string | null,
    color?: string | null,
    imageKey?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userAddedProductId?: string | null,
  } | null,
};

export type ListAddProductsQueryVariables = {
  filter?: ModelAddProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddProductsQuery = {
  listAddProducts?:  {
    __typename: "ModelAddProductConnection",
    items:  Array< {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      productName?: string | null,
      price?: number | null,
      description?: string | null,
      size?: string | null,
      color?: string | null,
      imageKey?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    AddedProduct?:  {
      __typename: "ModelAddProductConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    AddedProduct?:  {
      __typename: "ModelAddProductConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    AddedProduct?:  {
      __typename: "ModelAddProductConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateAddProductSubscriptionVariables = {
  filter?: ModelSubscriptionAddProductFilterInput | null,
};

export type OnCreateAddProductSubscription = {
  onCreateAddProduct?:  {
    __typename: "AddProduct",
    id: string,
    category?: string | null,
    productName?: string | null,
    price?: number | null,
    description?: string | null,
    size?: string | null,
    color?: string | null,
    imageKey?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userAddedProductId?: string | null,
  } | null,
};

export type OnUpdateAddProductSubscriptionVariables = {
  filter?: ModelSubscriptionAddProductFilterInput | null,
};

export type OnUpdateAddProductSubscription = {
  onUpdateAddProduct?:  {
    __typename: "AddProduct",
    id: string,
    category?: string | null,
    productName?: string | null,
    price?: number | null,
    description?: string | null,
    size?: string | null,
    color?: string | null,
    imageKey?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userAddedProductId?: string | null,
  } | null,
};

export type OnDeleteAddProductSubscriptionVariables = {
  filter?: ModelSubscriptionAddProductFilterInput | null,
};

export type OnDeleteAddProductSubscription = {
  onDeleteAddProduct?:  {
    __typename: "AddProduct",
    id: string,
    category?: string | null,
    productName?: string | null,
    price?: number | null,
    description?: string | null,
    size?: string | null,
    color?: string | null,
    imageKey?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userAddedProductId?: string | null,
  } | null,
};
