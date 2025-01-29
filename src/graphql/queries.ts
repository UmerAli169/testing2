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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddProductsQueryVariables,
  APITypes.ListAddProductsQuery
>;
export const getCartItem = /* GraphQL */ `query GetCartItem($id: ID!) {
  getCartItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCartItemQueryVariables,
  APITypes.GetCartItemQuery
>;
export const listCartItems = /* GraphQL */ `query ListCartItems(
  $filter: ModelCartItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      productName
      quantity
      price
      size
      color
      imageKeys
      createdAt
      updatedAt
      productId
      userId
      userCartItemsId
      addProductCartItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCartItemsQueryVariables,
  APITypes.ListCartItemsQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
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
      createdAt
      updatedAt
      __typename
    }
    userReviewsId
    addProductReviewsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rating
      text
      createdAt
      updatedAt
      productId
      userId
      userReviewsId
      addProductReviewsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
