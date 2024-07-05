import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
   mutation ($name: String!, $avatarUrl: String!, $username: String!) {
      updateUserProfile(name: $name, avatarUrl: $avatarUrl, username: $username) {
         userId
         name
         email
         avatarUrl
         username
         password
         createdAt
         updatedAt
      }
   }
`;

export const UPDATE_PASSWORD = gql`
   mutation ($password: String!) {
      updatePassword(password: $password) {
         userId
         name
         email
         avatarUrl
         username
         password
         createdAt
         updatedAt
      }
   }
`;
