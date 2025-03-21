import { gql } from "@apollo/client";


export const LOGIN_MUTATION = gql(/* GraphQL */ `
   mutation loginAuth($email: String!, $password: String!) {
      loginAuth(email: $email, password: $password) {
         user {
            userId
            name
            email
            avatarUrl
            username
            password
            createdAt
            updatedAt
         }
         token
      }
   }
`);
