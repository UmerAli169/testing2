/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAddProductInput = {
  category?: string | null,
  color?: Array< string | null > | null,
  description?: string | null,
  discountType?: string | null,
  discountValue?: number | null,
  discountedPrice?: number | null,
  imageKeys?: Array< string | null > | null,
  price?: number | null,
  productName?: string | null,
  size?: Array< string | null > | null,
  userId?: string | null,
  userAddedProductId?: string | null,
};

export type AddProduct = {
  __typename: "AddProduct",
  id: string,
  category?: string | null,
  color?: Array< string | null > | null,
  description?: string | null,
  discountType?: string | null,
  discountValue?: number | null,
  discountedPrice?: number | null,
  imageKeys?: Array< string | null > | null,
  price?: number | null,
  productName?: string | null,
  size?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  userId?: string | null,
  CartItems?: ModelCartItemConnection | null,
  Reviews?: ModelReviewConnection | null,
  userAddedProductId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  AddedProduct?: ModelAddProductConnection | null,
  CartItems?: ModelCartItemConnection | null,
  Reviews?: ModelReviewConnection | null,
};

export type ModelAddProductConnection = {
  __typename: "ModelAddProductConnection",
  items:  Array<AddProduct | null >,
  nextToken?: string | null,
};

export type ModelCartItemConnection = {
  __typename: "ModelCartItemConnection",
  items:  Array<CartItem | null >,
  nextToken?: string | null,
};

export type CartItem = {
  __typename: "CartItem",
  id: string,
  productName?: string | null,
  quantity?: number | null,
  price?: number | null,
  size?: Array< string | null > | null,
  color?: Array< string | null > | null,
  imageKeys?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  product?: AddProduct | null,
  productId?: string | null,
  user?: User | null,
  userId?: string | null,
  userCartItemsId?: string | null,
  addProductCartItemsId?: string | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  rating: number,
  text: string,
  createdAt: string,
  updatedAt: string,
  productId: string,
  product?: AddProduct | null,
  userId: string,
  user?: User | null,
  userReviewsId?: string | null,
  addProductReviewsId?: string | null,
};

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

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelAddProductConditionInput = {
  category?: ModelStringInput | null,
  color?: ModelStringInput | null,
  description?: ModelStringInput | null,
  discountType?: ModelStringInput | null,
  discountValue?: ModelFloatInput | null,
  discountedPrice?: ModelFloatInput | null,
  imageKeys?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  productName?: ModelStringInput | null,
  size?: ModelStringInput | null,
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
  color?: Array< string | null > | null,
  description?: string | null,
  discountType?: string | null,
  discountValue?: number | null,
  discountedPrice?: number | null,
  imageKeys?: Array< string | null > | null,
  price?: number | null,
  productName?: string | null,
  size?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
  userAddedProductId?: string | null,
};

export type DeleteAddProductInput = {
  id: string,
};

export type CreateCartItemInput = {
  id?: string | null,
  productName?: string | null,
  quantity?: number | null,
  price?: number | null,
  size?: Array< string | null > | null,
  color?: Array< string | null > | null,
  imageKeys?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  productId?: string | null,
  userId?: string | null,
  userCartItemsId?: string | null,
  addProductCartItemsId?: string | null,
};

export type ModelCartItemConditionInput = {
  productName?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  size?: ModelStringInput | null,
  color?: ModelStringInput | null,
  imageKeys?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  productId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCartItemConditionInput | null > | null,
  or?: Array< ModelCartItemConditionInput | null > | null,
  not?: ModelCartItemConditionInput | null,
  userCartItemsId?: ModelIDInput | null,
  addProductCartItemsId?: ModelIDInput | null,
};

export type ModelIntInput = {
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

export type UpdateCartItemInput = {
  id: string,
  productName?: string | null,
  quantity?: number | null,
  price?: number | null,
  size?: Array< string | null > | null,
  color?: Array< string | null > | null,
  imageKeys?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  productId?: string | null,
  userId?: string | null,
  userCartItemsId?: string | null,
  addProductCartItemsId?: string | null,
};

export type DeleteCartItemInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  rating: number,
  text: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  productId: string,
  userId: string,
  userReviewsId?: string | null,
  addProductReviewsId?: string | null,
};

export type ModelReviewConditionInput = {
  rating?: ModelIntInput | null,
  text?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  productId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  userReviewsId?: ModelIDInput | null,
  addProductReviewsId?: ModelIDInput | null,
};

export type UpdateReviewInput = {
  id: string,
  rating?: number | null,
  text?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  productId?: string | null,
  userId?: string | null,
  userReviewsId?: string | null,
  addProductReviewsId?: string | null,
};

export type DeleteReviewInput = {
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
  color?: ModelStringInput | null,
  description?: ModelStringInput | null,
  discountType?: ModelStringInput | null,
  discountValue?: ModelFloatInput | null,
  discountedPrice?: ModelFloatInput | null,
  imageKeys?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  productName?: ModelStringInput | null,
  size?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelAddProductFilterInput | null > | null,
  or?: Array< ModelAddProductFilterInput | null > | null,
  not?: ModelAddProductFilterInput | null,
  userAddedProductId?: ModelIDInput | null,
};

export type ModelCartItemFilterInput = {
  id?: ModelIDInput | null,
  productName?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  size?: ModelStringInput | null,
  color?: ModelStringInput | null,
  imageKeys?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  productId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCartItemFilterInput | null > | null,
  or?: Array< ModelCartItemFilterInput | null > | null,
  not?: ModelCartItemFilterInput | null,
  userCartItemsId?: ModelIDInput | null,
  addProductCartItemsId?: ModelIDInput | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  text?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  productId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
  userReviewsId?: ModelIDInput | null,
  addProductReviewsId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userAddedProductId?: ModelSubscriptionIDInput | null,
  userCartItemsId?: ModelSubscriptionIDInput | null,
  userReviewsId?: ModelSubscriptionIDInput | null,
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
  color?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  discountType?: ModelSubscriptionStringInput | null,
  discountValue?: ModelSubscriptionFloatInput | null,
  discountedPrice?: ModelSubscriptionFloatInput | null,
  imageKeys?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  productName?: ModelSubscriptionStringInput | null,
  size?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAddProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddProductFilterInput | null > | null,
  addProductCartItemsId?: ModelSubscriptionIDInput | null,
  addProductReviewsId?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionCartItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productName?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  price?: ModelSubscriptionFloatInput | null,
  size?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  imageKeys?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  productId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCartItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartItemFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
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

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rating?: ModelSubscriptionIntInput | null,
  text?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  productId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
};

export type CustomAddProductMutationVariables = {
  input?: CreateAddProductInput | null,
};

export type CustomAddProductMutation = {
  customAddProduct?:  {
    __typename: "AddProduct",
    id: string,
    category?: string | null,
    color?: Array< string | null > | null,
    description?: string | null,
    discountType?: string | null,
    discountValue?: number | null,
    discountedPrice?: number | null,
    imageKeys?: Array< string | null > | null,
    price?: number | null,
    productName?: string | null,
    size?: Array< string | null > | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    userAddedProductId?: string | null,
  } | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
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
    color?: Array< string | null > | null,
    description?: string | null,
    discountType?: string | null,
    discountValue?: number | null,
    discountedPrice?: number | null,
    imageKeys?: Array< string | null > | null,
    price?: number | null,
    productName?: string | null,
    size?: Array< string | null > | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
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
    color?: Array< string | null > | null,
    description?: string | null,
    discountType?: string | null,
    discountValue?: number | null,
    discountedPrice?: number | null,
    imageKeys?: Array< string | null > | null,
    price?: number | null,
    productName?: string | null,
    size?: Array< string | null > | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
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
    color?: Array< string | null > | null,
    description?: string | null,
    discountType?: string | null,
    discountValue?: number | null,
    discountedPrice?: number | null,
    imageKeys?: Array< string | null > | null,
    price?: number | null,
    productName?: string | null,
    size?: Array< string | null > | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    userAddedProductId?: string | null,
  } | null,
};

export type CreateCartItemMutationVariables = {
  input: CreateCartItemInput,
  condition?: ModelCartItemConditionInput | null,
};

export type CreateCartItemMutation = {
  createCartItem?:  {
    __typename: "CartItem",
    id: string,
    productName?: string | null,
    quantity?: number | null,
    price?: number | null,
    size?: Array< string | null > | null,
    color?: Array< string | null > | null,
    imageKeys?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    productId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userCartItemsId?: string | null,
    addProductCartItemsId?: string | null,
  } | null,
};

export type UpdateCartItemMutationVariables = {
  input: UpdateCartItemInput,
  condition?: ModelCartItemConditionInput | null,
};

export type UpdateCartItemMutation = {
  updateCartItem?:  {
    __typename: "CartItem",
    id: string,
    productName?: string | null,
    quantity?: number | null,
    price?: number | null,
    size?: Array< string | null > | null,
    color?: Array< string | null > | null,
    imageKeys?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    productId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userCartItemsId?: string | null,
    addProductCartItemsId?: string | null,
  } | null,
};

export type DeleteCartItemMutationVariables = {
  input: DeleteCartItemInput,
  condition?: ModelCartItemConditionInput | null,
};

export type DeleteCartItemMutation = {
  deleteCartItem?:  {
    __typename: "CartItem",
    id: string,
    productName?: string | null,
    quantity?: number | null,
    price?: number | null,
    size?: Array< string | null > | null,
    color?: Array< string | null > | null,
    imageKeys?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    productId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userCartItemsId?: string | null,
    addProductCartItemsId?: string | null,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    rating: number,
    text: string,
    createdAt: string,
    updatedAt: string,
    productId: string,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userReviewsId?: string | null,
    addProductReviewsId?: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    rating: number,
    text: string,
    createdAt: string,
    updatedAt: string,
    productId: string,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userReviewsId?: string | null,
    addProductReviewsId?: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    rating: number,
    text: string,
    createdAt: string,
    updatedAt: string,
    productId: string,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userReviewsId?: string | null,
    addProductReviewsId?: string | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
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
    color?: Array< string | null > | null,
    description?: string | null,
    discountType?: string | null,
    discountValue?: number | null,
    discountedPrice?: number | null,
    imageKeys?: Array< string | null > | null,
    price?: number | null,
    productName?: string | null,
    size?: Array< string | null > | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
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
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartItemQueryVariables = {
  id: string,
};

export type GetCartItemQuery = {
  getCartItem?:  {
    __typename: "CartItem",
    id: string,
    productName?: string | null,
    quantity?: number | null,
    price?: number | null,
    size?: Array< string | null > | null,
    color?: Array< string | null > | null,
    imageKeys?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    productId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userCartItemsId?: string | null,
    addProductCartItemsId?: string | null,
  } | null,
};

export type ListCartItemsQueryVariables = {
  filter?: ModelCartItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartItemsQuery = {
  listCartItems?:  {
    __typename: "ModelCartItemConnection",
    items:  Array< {
      __typename: "CartItem",
      id: string,
      productName?: string | null,
      quantity?: number | null,
      price?: number | null,
      size?: Array< string | null > | null,
      color?: Array< string | null > | null,
      imageKeys?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      productId?: string | null,
      userId?: string | null,
      userCartItemsId?: string | null,
      addProductCartItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    rating: number,
    text: string,
    createdAt: string,
    updatedAt: string,
    productId: string,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userReviewsId?: string | null,
    addProductReviewsId?: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      rating: number,
      text: string,
      createdAt: string,
      updatedAt: string,
      productId: string,
      userId: string,
      userReviewsId?: string | null,
      addProductReviewsId?: string | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
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
    color?: Array< string | null > | null,
    description?: string | null,
    discountType?: string | null,
    discountValue?: number | null,
    discountedPrice?: number | null,
    imageKeys?: Array< string | null > | null,
    price?: number | null,
    productName?: string | null,
    size?: Array< string | null > | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
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
    color?: Array< string | null > | null,
    description?: string | null,
    discountType?: string | null,
    discountValue?: number | null,
    discountedPrice?: number | null,
    imageKeys?: Array< string | null > | null,
    price?: number | null,
    productName?: string | null,
    size?: Array< string | null > | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
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
    color?: Array< string | null > | null,
    description?: string | null,
    discountType?: string | null,
    discountValue?: number | null,
    discountedPrice?: number | null,
    imageKeys?: Array< string | null > | null,
    price?: number | null,
    productName?: string | null,
    size?: Array< string | null > | null,
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
    CartItems?:  {
      __typename: "ModelCartItemConnection",
      nextToken?: string | null,
    } | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    userAddedProductId?: string | null,
  } | null,
};

export type OnCreateCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnCreateCartItemSubscription = {
  onCreateCartItem?:  {
    __typename: "CartItem",
    id: string,
    productName?: string | null,
    quantity?: number | null,
    price?: number | null,
    size?: Array< string | null > | null,
    color?: Array< string | null > | null,
    imageKeys?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    productId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userCartItemsId?: string | null,
    addProductCartItemsId?: string | null,
  } | null,
};

export type OnUpdateCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnUpdateCartItemSubscription = {
  onUpdateCartItem?:  {
    __typename: "CartItem",
    id: string,
    productName?: string | null,
    quantity?: number | null,
    price?: number | null,
    size?: Array< string | null > | null,
    color?: Array< string | null > | null,
    imageKeys?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    productId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userCartItemsId?: string | null,
    addProductCartItemsId?: string | null,
  } | null,
};

export type OnDeleteCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnDeleteCartItemSubscription = {
  onDeleteCartItem?:  {
    __typename: "CartItem",
    id: string,
    productName?: string | null,
    quantity?: number | null,
    price?: number | null,
    size?: Array< string | null > | null,
    color?: Array< string | null > | null,
    imageKeys?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    productId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    userCartItemsId?: string | null,
    addProductCartItemsId?: string | null,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    rating: number,
    text: string,
    createdAt: string,
    updatedAt: string,
    productId: string,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userReviewsId?: string | null,
    addProductReviewsId?: string | null,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    rating: number,
    text: string,
    createdAt: string,
    updatedAt: string,
    productId: string,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userReviewsId?: string | null,
    addProductReviewsId?: string | null,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    rating: number,
    text: string,
    createdAt: string,
    updatedAt: string,
    productId: string,
    product?:  {
      __typename: "AddProduct",
      id: string,
      category?: string | null,
      color?: Array< string | null > | null,
      description?: string | null,
      discountType?: string | null,
      discountValue?: number | null,
      discountedPrice?: number | null,
      imageKeys?: Array< string | null > | null,
      price?: number | null,
      productName?: string | null,
      size?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      userAddedProductId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userReviewsId?: string | null,
    addProductReviewsId?: string | null,
  } | null,
};
