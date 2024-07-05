import { gql } from "@apollo/client";

export const GET_USER = gql`
   query {
      getUser {
         userId
         name
         email
         avatarUrl
         username
      }
   }
`;
