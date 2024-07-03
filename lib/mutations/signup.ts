import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
   mutation ($name: String!, $email: String!, $avatarUrl: String!, $username: String!, $password: String!) {
      createUser(name: $name, email: $email, avatarUrl: $avatarUrl, username: $username, password: $password) {
         userId
         email
      }
   }
`;
