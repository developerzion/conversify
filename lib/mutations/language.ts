import { gql } from "@apollo/client";

export const CHANGE_LANGUAGE = gql`
   mutation changeUserLanguage($language: String!) {
      changeUserLanguage(language: $language) {
         languageId
         userId
         language
         createdAt
         updatedAt
      }
   }
`;
