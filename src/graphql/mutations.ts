/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const customAddProduct = /* GraphQL */ `mutation CustomAddProduct($input: CreateAddProductInput) {
  customAddProduct(input: $input) {
    id
    category
    color
    description
    discountType
    discountValue
    discountedPrice
    imageKeys
    price
    productName
    size
    createdAt
    updatedAt
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userId
    CartItems {
      nextToken
      __typename
    }
    Reviews {
      nextToken
      __typename
    }
    userAddedProductId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CustomAddProductMutationVariables,
  APITypes.CustomAddProductMutation
>;
export const sendEmail = /* GraphQL */ `mutation SendEmail(
  $name: String!
  $email: String!
  $phone: String
  $message: String!
) {
  sendEmail(name: $name, email: $email, phone: $phone, message: $message) {
    message
    success
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SendEmailMutationVariables,
  APITypes.SendEmailMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    email
    firstName
    lastName
    Address
    createdAt
    updatedAt
    AddedProduct {
      nextToken
      __typename
    }
    CartItems {
      nextToken
      __typename
    }
    Reviews {
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
    firstName
    lastName
    Address
    createdAt
    updatedAt
    AddedProduct {
      nextToken
      __typename
    }
    CartItems {
      nextToken
      __typename
    }
    Reviews {
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
    firstName
    lastName
    Address
    createdAt
    updatedAt
    AddedProduct {
      nextToken
      __typename
    }
    CartItems {
      nextToken
      __typename
    }
    Reviews {
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
    color
    description
    discountType
    discountValue
    discountedPrice
    imageKeys
    price
    productName
    size
    createdAt
    updatedAt
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userId
    CartItems {
      nextToken
      __typename
    }
    Reviews {
      nextToken
      __typename
    }
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
    color
    description
    discountType
    discountValue
    discountedPrice
    imageKeys
    price
    productName
    size
    createdAt
    updatedAt
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userId
    CartItems {
      nextToken
      __typename
    }
    Reviews {
      nextToken
      __typename
    }
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
    color
    description
    discountType
    discountValue
    discountedPrice
    imageKeys
    price
    productName
    size
    createdAt
    updatedAt
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userId
    CartItems {
      nextToken
      __typename
    }
    Reviews {
      nextToken
      __typename
    }
    userAddedProductId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAddProductMutationVariables,
  APITypes.DeleteAddProductMutation
>;
export const createCartItem = /* GraphQL */ `mutation CreateCartItem(
  $input: CreateCartItemInput!
  $condition: ModelCartItemConditionInput
) {
  createCartItem(input: $input, condition: $condition) {
    id
    productName
    quantity
    price
    size
    color
    imageKeys
    createdAt
    updatedAt
    product {
      id
      category
      color
      description
      discountType
      discountValue
      discountedPrice
      imageKeys
      price
      productName
      size
      createdAt
      updatedAt
      userId
      userAddedProductId
      __typename
    }
    productId
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userId
    userCartItemsId
    addProductCartItemsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartItemMutationVariables,
  APITypes.CreateCartItemMutation
>;
export const updateCartItem = /* GraphQL */ `mutation UpdateCartItem(
  $input: UpdateCartItemInput!
  $condition: ModelCartItemConditionInput
) {
  updateCartItem(input: $input, condition: $condition) {
    id
    productName
    quantity
    price
    size
    color
    imageKeys
    createdAt
    updatedAt
    product {
      id
      category
      color
      description
      discountType
      discountValue
      discountedPrice
      imageKeys
      price
      productName
      size
      createdAt
      updatedAt
      userId
      userAddedProductId
      __typename
    }
    productId
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userId
    userCartItemsId
    addProductCartItemsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartItemMutationVariables,
  APITypes.UpdateCartItemMutation
>;
export const deleteCartItem = /* GraphQL */ `mutation DeleteCartItem(
  $input: DeleteCartItemInput!
  $condition: ModelCartItemConditionInput
) {
  deleteCartItem(input: $input, condition: $condition) {
    id
    productName
    quantity
    price
    size
    color
    imageKeys
    createdAt
    updatedAt
    product {
      id
      category
      color
      description
      discountType
      discountValue
      discountedPrice
      imageKeys
      price
      productName
      size
      createdAt
      updatedAt
      userId
      userAddedProductId
      __typename
    }
    productId
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userId
    userCartItemsId
    addProductCartItemsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartItemMutationVariables,
  APITypes.DeleteCartItemMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
    id
    rating
    text
    createdAt
    updatedAt
    productId
    product {
      id
      category
      color
      description
      discountType
      discountValue
      discountedPrice
      imageKeys
      price
      productName
      size
      createdAt
      updatedAt
      userId
      userAddedProductId
      __typename
    }
    userId
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userReviewsId
    addProductReviewsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
    id
    rating
    text
    createdAt
    updatedAt
    productId
    product {
      id
      category
      color
      description
      discountType
      discountValue
      discountedPrice
      imageKeys
      price
      productName
      size
      createdAt
      updatedAt
      userId
      userAddedProductId
      __typename
    }
    userId
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userReviewsId
    addProductReviewsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
    id
    rating
    text
    createdAt
    updatedAt
    productId
    product {
      id
      category
      color
      description
      discountType
      discountValue
      discountedPrice
      imageKeys
      price
      productName
      size
      createdAt
      updatedAt
      userId
      userAddedProductId
      __typename
    }
    userId
    user {
      id
      email
      firstName
      lastName
      Address
      createdAt
      updatedAt
      __typename
    }
    userReviewsId
    addProductReviewsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
