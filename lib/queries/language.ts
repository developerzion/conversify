import { gql } from "@apollo/client";

export const MY_LANGUAGE = gql`
   query getUserLanguage{
      getUserLanguage {
         languageId
         userId
         language
         createdAt
         updatedAt
      }
   }
`;
