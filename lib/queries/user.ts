import { gql } from "@apollo/client";

export const GET_USER = gql`
   query getUser{
      getUser {
         userId
         name
         email
         avatarUrl
         username
      }
   }
`;

export const GET_FRIEND_REQUESTS = gql`
   query getFriendRequests{
      getFriendRequests {
         request {
            friendRequestId
            sender
            receiver
            requestStatus
            requestSentTo
            createdAt
            updatedAt
         }
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
      }
   }
`;
