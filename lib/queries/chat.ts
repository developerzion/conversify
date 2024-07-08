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
