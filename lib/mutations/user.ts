import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
   mutation updateUserProfile($name: String!, $avatarUrl: String!, $username: String!) {
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
   mutation updatePassword($password: String!) {
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

export const SEND_FRIEND_REQUEST = gql`
   mutation sendFriendRequest($email: String!) {
      sendFriendRequest(email: $email) {
         friendRequestId
      }
   }
`;

export const ACCEPT_DECLINE_FRIEND_REQUEST = gql`
   mutation acceptDeclineRequest($friendRequestId: String!, $status: String!) {
      acceptDeclineRequest(friendRequestId: $friendRequestId, status: $status)
   }
`;
