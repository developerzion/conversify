/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n   mutation sendMessages($receiverId: String!, $message: String!) {\n      sendMessages(receiverId: $receiverId, message: $message) {\n         messageId\n      }\n   }\n": types.SendMessagesDocument,
    "\n   mutation changeUserLanguage($language: String!) {\n      changeUserLanguage(language: $language) {\n         languageId\n         userId\n         language\n         createdAt\n         updatedAt\n      }\n   }\n": types.ChangeUserLanguageDocument,
    "\n   mutation loginAuth($email: String!, $password: String!) {\n      loginAuth(email: $email, password: $password) {\n         user {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n         token\n      }\n   }\n": types.LoginAuthDocument,
    "\n   mutation createUser($name: String!, $email: String!, $avatarUrl: String!, $username: String!, $password: String!) {\n      createUser(name: $name, email: $email, avatarUrl: $avatarUrl, username: $username, password: $password) {\n         userId\n         email\n      }\n   }\n": types.CreateUserDocument,
    "\n   mutation updateUserProfile($name: String!, $avatarUrl: String!, $username: String!) {\n      updateUserProfile(name: $name, avatarUrl: $avatarUrl, username: $username) {\n         userId\n         name\n         email\n         avatarUrl\n         username\n         password\n         createdAt\n         updatedAt\n      }\n   }\n": types.UpdateUserProfileDocument,
    "\n   mutation updatePassword($password: String!) {\n      updatePassword(password: $password) {\n         userId\n         name\n         email\n         avatarUrl\n         username\n         password\n         createdAt\n         updatedAt\n      }\n   }\n": types.UpdatePasswordDocument,
    "\n   mutation sendFriendRequest($email: String!) {\n      sendFriendRequest(email: $email) {\n         friendRequestId\n      }\n   }\n": types.SendFriendRequestDocument,
    "\n   mutation acceptDeclineRequest($friendRequestId: String!, $status: String!) {\n      acceptDeclineRequest(friendRequestId: $friendRequestId, status: $status)\n   }\n": types.AcceptDeclineRequestDocument,
    "\n   query getFriends {\n      getFriends {\n         friendsId\n         senderId\n         receiverId\n         receiver {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n": types.GetFriendsDocument,
    "\n   query getMessages($receiverId: String!) {\n      getMessages(receiverId: $receiverId) {\n         messageId\n         senderId\n         receiverId\n         receiverMsg\n         senderMsg\n         createdAt\n         edited\n         updatedAt\n         delivered\n         read\n         sender {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n         receiver {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n": types.GetMessagesDocument,
    "\n   query getUserLanguage{\n      getUserLanguage {\n         languageId\n         userId\n         language\n         createdAt\n         updatedAt\n      }\n   }\n": types.GetUserLanguageDocument,
    "\n   query getUser{\n      getUser {\n         userId\n         name\n         email\n         avatarUrl\n         username\n      }\n   }\n": types.GetUserDocument,
    "\n   query getFriendRequests{\n      getFriendRequests {\n         request {\n            friendRequestId\n            sender\n            receiver\n            requestStatus\n            requestSentTo\n            createdAt\n            updatedAt\n         }\n         user {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n": types.GetFriendRequestsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation sendMessages($receiverId: String!, $message: String!) {\n      sendMessages(receiverId: $receiverId, message: $message) {\n         messageId\n      }\n   }\n"): (typeof documents)["\n   mutation sendMessages($receiverId: String!, $message: String!) {\n      sendMessages(receiverId: $receiverId, message: $message) {\n         messageId\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation changeUserLanguage($language: String!) {\n      changeUserLanguage(language: $language) {\n         languageId\n         userId\n         language\n         createdAt\n         updatedAt\n      }\n   }\n"): (typeof documents)["\n   mutation changeUserLanguage($language: String!) {\n      changeUserLanguage(language: $language) {\n         languageId\n         userId\n         language\n         createdAt\n         updatedAt\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation loginAuth($email: String!, $password: String!) {\n      loginAuth(email: $email, password: $password) {\n         user {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n         token\n      }\n   }\n"): (typeof documents)["\n   mutation loginAuth($email: String!, $password: String!) {\n      loginAuth(email: $email, password: $password) {\n         user {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n         token\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation createUser($name: String!, $email: String!, $avatarUrl: String!, $username: String!, $password: String!) {\n      createUser(name: $name, email: $email, avatarUrl: $avatarUrl, username: $username, password: $password) {\n         userId\n         email\n      }\n   }\n"): (typeof documents)["\n   mutation createUser($name: String!, $email: String!, $avatarUrl: String!, $username: String!, $password: String!) {\n      createUser(name: $name, email: $email, avatarUrl: $avatarUrl, username: $username, password: $password) {\n         userId\n         email\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation updateUserProfile($name: String!, $avatarUrl: String!, $username: String!) {\n      updateUserProfile(name: $name, avatarUrl: $avatarUrl, username: $username) {\n         userId\n         name\n         email\n         avatarUrl\n         username\n         password\n         createdAt\n         updatedAt\n      }\n   }\n"): (typeof documents)["\n   mutation updateUserProfile($name: String!, $avatarUrl: String!, $username: String!) {\n      updateUserProfile(name: $name, avatarUrl: $avatarUrl, username: $username) {\n         userId\n         name\n         email\n         avatarUrl\n         username\n         password\n         createdAt\n         updatedAt\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation updatePassword($password: String!) {\n      updatePassword(password: $password) {\n         userId\n         name\n         email\n         avatarUrl\n         username\n         password\n         createdAt\n         updatedAt\n      }\n   }\n"): (typeof documents)["\n   mutation updatePassword($password: String!) {\n      updatePassword(password: $password) {\n         userId\n         name\n         email\n         avatarUrl\n         username\n         password\n         createdAt\n         updatedAt\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation sendFriendRequest($email: String!) {\n      sendFriendRequest(email: $email) {\n         friendRequestId\n      }\n   }\n"): (typeof documents)["\n   mutation sendFriendRequest($email: String!) {\n      sendFriendRequest(email: $email) {\n         friendRequestId\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation acceptDeclineRequest($friendRequestId: String!, $status: String!) {\n      acceptDeclineRequest(friendRequestId: $friendRequestId, status: $status)\n   }\n"): (typeof documents)["\n   mutation acceptDeclineRequest($friendRequestId: String!, $status: String!) {\n      acceptDeclineRequest(friendRequestId: $friendRequestId, status: $status)\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query getFriends {\n      getFriends {\n         friendsId\n         senderId\n         receiverId\n         receiver {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n"): (typeof documents)["\n   query getFriends {\n      getFriends {\n         friendsId\n         senderId\n         receiverId\n         receiver {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query getMessages($receiverId: String!) {\n      getMessages(receiverId: $receiverId) {\n         messageId\n         senderId\n         receiverId\n         receiverMsg\n         senderMsg\n         createdAt\n         edited\n         updatedAt\n         delivered\n         read\n         sender {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n         receiver {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n"): (typeof documents)["\n   query getMessages($receiverId: String!) {\n      getMessages(receiverId: $receiverId) {\n         messageId\n         senderId\n         receiverId\n         receiverMsg\n         senderMsg\n         createdAt\n         edited\n         updatedAt\n         delivered\n         read\n         sender {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n         receiver {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query getUserLanguage{\n      getUserLanguage {\n         languageId\n         userId\n         language\n         createdAt\n         updatedAt\n      }\n   }\n"): (typeof documents)["\n   query getUserLanguage{\n      getUserLanguage {\n         languageId\n         userId\n         language\n         createdAt\n         updatedAt\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query getUser{\n      getUser {\n         userId\n         name\n         email\n         avatarUrl\n         username\n      }\n   }\n"): (typeof documents)["\n   query getUser{\n      getUser {\n         userId\n         name\n         email\n         avatarUrl\n         username\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query getFriendRequests{\n      getFriendRequests {\n         request {\n            friendRequestId\n            sender\n            receiver\n            requestStatus\n            requestSentTo\n            createdAt\n            updatedAt\n         }\n         user {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n"): (typeof documents)["\n   query getFriendRequests{\n      getFriendRequests {\n         request {\n            friendRequestId\n            sender\n            receiver\n            requestStatus\n            requestSentTo\n            createdAt\n            updatedAt\n         }\n         user {\n            userId\n            name\n            email\n            avatarUrl\n            username\n            password\n            createdAt\n            updatedAt\n         }\n      }\n   }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;