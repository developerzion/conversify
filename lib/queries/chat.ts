import { gql } from "@apollo/client";

export const GET_FRIENDS = gql`
   query getFriends {
      getFriends {
         friendsId
         senderId
         receiverId
         receiver {
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
   }
`;

export const GET_MESSAGES = gql`
   query getMessages($receiverId: String!) {
      getMessages(receiverId: $receiverId) {
         messageId
         senderId
         receiverId
         message
         createdAt
         edited
         updatedAt
         delivered
         read
         sender {
            userId
            name
            email
            avatarUrl
            username
            password
            createdAt
            updatedAt
         }
         receiver {
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
   }
`;
