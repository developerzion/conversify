import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
   mutation sendMessages($receiverId: String!, $message: String!) {
      sendMessages(receiverId: $receiverId, message: $message) {
         messageId
      }
   }
`;
