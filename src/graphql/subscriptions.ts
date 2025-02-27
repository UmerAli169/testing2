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
    firstName
    lastName
    Address
    createdAt
    updatedAt
    AddedProduct {
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
        user {
          id
          email
          firstName
          lastName
          Address
          createdAt
          updatedAt
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        userAddedProductId
        __typename
      }
      nextToken
      __typename
    }
    CartItems {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userCartItemsId
        addProductCartItemsId
        __typename
      }
      nextToken
      __typename
    }
    Reviews {
      items {
        id
        rating
        text
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userReviewsId
        addProductReviewsId
        __typename
      }
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
    firstName
    lastName
    Address
    createdAt
    updatedAt
    AddedProduct {
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
        user {
          id
          email
          firstName
          lastName
          Address
          createdAt
          updatedAt
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        userAddedProductId
        __typename
      }
      nextToken
      __typename
    }
    CartItems {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userCartItemsId
        addProductCartItemsId
        __typename
      }
      nextToken
      __typename
    }
    Reviews {
      items {
        id
        rating
        text
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userReviewsId
        addProductReviewsId
        __typename
      }
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
    firstName
    lastName
    Address
    createdAt
    updatedAt
    AddedProduct {
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
        user {
          id
          email
          firstName
          lastName
          Address
          createdAt
          updatedAt
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        userAddedProductId
        __typename
      }
      nextToken
      __typename
    }
    CartItems {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userCartItemsId
        addProductCartItemsId
        __typename
      }
      nextToken
      __typename
    }
    Reviews {
      items {
        id
        rating
        text
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userReviewsId
        addProductReviewsId
        __typename
      }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    CartItems {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userCartItemsId
        addProductCartItemsId
        __typename
      }
      nextToken
      __typename
    }
    Reviews {
      items {
        id
        rating
        text
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userReviewsId
        addProductReviewsId
        __typename
      }
      nextToken
      __typename
    }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    CartItems {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userCartItemsId
        addProductCartItemsId
        __typename
      }
      nextToken
      __typename
    }
    Reviews {
      items {
        id
        rating
        text
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userReviewsId
        addProductReviewsId
        __typename
      }
      nextToken
      __typename
    }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    CartItems {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userCartItemsId
        addProductCartItemsId
        __typename
      }
      nextToken
      __typename
    }
    Reviews {
      items {
        id
        rating
        text
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          AddedProduct {
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
          CartItems {
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
          Reviews {
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
          __typename
        }
        userId
        userReviewsId
        addProductReviewsId
        __typename
      }
      nextToken
      __typename
    }
    userAddedProductId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAddProductSubscriptionVariables,
  APITypes.OnDeleteAddProductSubscription
>;
export const onCreateCartItem = /* GraphQL */ `subscription OnCreateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onCreateCartItem(filter: $filter) {
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
      user {
        id
        email
        firstName
        lastName
        Address
        createdAt
        updatedAt
        AddedProduct {
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
          nextToken
          __typename
        }
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    userCartItemsId
    addProductCartItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCartItemSubscriptionVariables,
  APITypes.OnCreateCartItemSubscription
>;
export const onUpdateCartItem = /* GraphQL */ `subscription OnUpdateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onUpdateCartItem(filter: $filter) {
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
      user {
        id
        email
        firstName
        lastName
        Address
        createdAt
        updatedAt
        AddedProduct {
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
          nextToken
          __typename
        }
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    userCartItemsId
    addProductCartItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCartItemSubscriptionVariables,
  APITypes.OnUpdateCartItemSubscription
>;
export const onDeleteCartItem = /* GraphQL */ `subscription OnDeleteCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onDeleteCartItem(filter: $filter) {
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
      user {
        id
        email
        firstName
        lastName
        Address
        createdAt
        updatedAt
        AddedProduct {
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
          nextToken
          __typename
        }
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    userCartItemsId
    addProductCartItemsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCartItemSubscriptionVariables,
  APITypes.OnDeleteCartItemSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
    id
    rating
    text
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
      user {
        id
        email
        firstName
        lastName
        Address
        createdAt
        updatedAt
        AddedProduct {
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
          nextToken
          __typename
        }
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    userReviewsId
    addProductReviewsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
    id
    rating
    text
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
      user {
        id
        email
        firstName
        lastName
        Address
        createdAt
        updatedAt
        AddedProduct {
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
          nextToken
          __typename
        }
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    userReviewsId
    addProductReviewsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
    id
    rating
    text
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
      user {
        id
        email
        firstName
        lastName
        Address
        createdAt
        updatedAt
        AddedProduct {
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
          nextToken
          __typename
        }
        CartItems {
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
          nextToken
          __typename
        }
        Reviews {
          items {
            id
            rating
            text
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
            userReviewsId
            addProductReviewsId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
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
      AddedProduct {
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
          user {
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
          userId
          CartItems {
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
          Reviews {
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
          userAddedProductId
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
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
          productId
          user {
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
          userId
          userCartItemsId
          addProductCartItemsId
          __typename
        }
        nextToken
        __typename
      }
      Reviews {
        items {
          id
          rating
          text
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
          productId
          user {
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
          userId
          userReviewsId
          addProductReviewsId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    userReviewsId
    addProductReviewsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
