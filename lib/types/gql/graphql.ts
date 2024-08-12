/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type ChatModel = {
  __typename?: 'ChatModel';
  /** Date created */
  createdAt: Scalars['DateTime']['output'];
  delivered: Scalars['Boolean']['output'];
  edited: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  receiver?: Maybe<UserModel>;
  /** Unique receiver id */
  receiverId: Scalars['String']['output'];
  sender?: Maybe<UserModel>;
  /** Unique sender id */
  senderId: Scalars['String']['output'];
  /** Last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type FriendRequestModel = {
  __typename?: 'FriendRequestModel';
  /** Date created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique friend request Id */
  friendRequestId: Scalars['String']['output'];
  /** Unique receiver id */
  receiver: Scalars['String']['output'];
  /** Receiver full name */
  requestSentTo?: Maybe<Scalars['String']['output']>;
  /** Request status */
  requestStatus: Scalars['String']['output'];
  /** Unique sender id */
  sender: Scalars['String']['output'];
  /** Last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type FriendsModel = {
  __typename?: 'FriendsModel';
  /** Date created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique friend friend Id */
  friendsId: Scalars['String']['output'];
  /** Unique receiver id */
  receiver: UserModel;
  /** Unique receiver id */
  receiverId: Scalars['String']['output'];
  /** Unique sender id */
  senderId: Scalars['String']['output'];
  /** Last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type GetFriendRequestModel = {
  __typename?: 'GetFriendRequestModel';
  request: FriendRequestModel;
  user: UserModel;
};

export type LoginModel = {
  __typename?: 'LoginModel';
  /** Session token */
  token: Scalars['String']['output'];
  /** Authenticated user model */
  user: UserModel;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptDeclineRequest: Scalars['Boolean']['output'];
  createUser: UserModel;
  loginAuth: LoginModel;
  sendFriendRequest: FriendRequestModel;
  sendMessages: ChatModel;
  updatePassword: UserModel;
  updateUserProfile: UserModel;
};


export type MutationAcceptDeclineRequestArgs = {
  friendRequestId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  avatarUrl: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationLoginAuthArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSendFriendRequestArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendMessagesArgs = {
  message: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
};


export type MutationUpdatePasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationUpdateUserProfileArgs = {
  avatarUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getFriendRequests: Array<GetFriendRequestModel>;
  getFriends: Array<FriendsModel>;
  getMessages: Array<ChatModel>;
  getUser: UserModel;
};


export type QueryGetMessagesArgs = {
  receiverId: Scalars['String']['input'];
};

export type UserModel = {
  __typename?: 'UserModel';
  /** User avatar url */
  avatarUrl: Scalars['String']['output'];
  /** Date created */
  createdAt: Scalars['DateTime']['output'];
  /** User email address */
  email: Scalars['String']['output'];
  /** User full name */
  name: Scalars['String']['output'];
  /** User encrypted password */
  password: Scalars['String']['output'];
  /** Last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User auto generated id */
  userId: Scalars['String']['output'];
  /** User preferred username */
  username: Scalars['String']['output'];
};

export type LoginAuthMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginAuthMutation = { __typename?: 'Mutation', loginAuth: { __typename?: 'LoginModel', token: string, user: { __typename?: 'UserModel', userId: string, name: string, email: string, avatarUrl: string, username: string, password: string, createdAt: any, updatedAt: any } } };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  avatarUrl: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserModel', userId: string, email: string } };

export type UpdateUserProfileMutationVariables = Exact<{
  name: Scalars['String']['input'];
  avatarUrl: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserModel', userId: string, name: string, email: string, avatarUrl: string, username: string, password: string, createdAt: any, updatedAt: any } };

export type UpdatePasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'UserModel', userId: string, name: string, email: string, avatarUrl: string, username: string, password: string, createdAt: any, updatedAt: any } };

export type SendFriendRequestMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendFriendRequestMutation = { __typename?: 'Mutation', sendFriendRequest: { __typename?: 'FriendRequestModel', friendRequestId: string } };

export type AcceptDeclineRequestMutationVariables = Exact<{
  friendRequestId: Scalars['String']['input'];
  status: Scalars['String']['input'];
}>;


export type AcceptDeclineRequestMutation = { __typename?: 'Mutation', acceptDeclineRequest: boolean };

export type GetFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendsQuery = { __typename?: 'Query', getFriends: Array<{ __typename?: 'FriendsModel', friendsId: string, senderId: string, receiverId: string, receiver: { __typename?: 'UserModel', userId: string, name: string, email: string, avatarUrl: string, username: string, password: string, createdAt: any, updatedAt: any } }> };

export type GetMessagesQueryVariables = Exact<{
  receiverId: Scalars['String']['input'];
}>;


export type GetMessagesQuery = { __typename?: 'Query', getMessages: Array<{ __typename?: 'ChatModel', messageId: string, senderId: string, receiverId: string, message: string, createdAt: any, edited: boolean, updatedAt: any, delivered: boolean, read: boolean, sender?: { __typename?: 'UserModel', userId: string, name: string, email: string, avatarUrl: string, username: string, password: string, createdAt: any, updatedAt: any } | null, receiver?: { __typename?: 'UserModel', userId: string, name: string, email: string, avatarUrl: string, username: string, password: string, createdAt: any, updatedAt: any } | null }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'UserModel', userId: string, name: string, email: string, avatarUrl: string, username: string } };

export type GetFriendRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendRequestsQuery = { __typename?: 'Query', getFriendRequests: Array<{ __typename?: 'GetFriendRequestModel', request: { __typename?: 'FriendRequestModel', friendRequestId: string, sender: string, receiver: string, requestStatus: string, requestSentTo?: string | null, createdAt: any, updatedAt: any }, user: { __typename?: 'UserModel', userId: string, name: string, email: string, avatarUrl: string, username: string, password: string, createdAt: any, updatedAt: any } }> };


export const LoginAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginAuthMutation, LoginAuthMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatarUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"avatarUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatarUrl"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatarUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"avatarUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatarUrl"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const UpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const SendFriendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendFriendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendFriendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"friendRequestId"}}]}}]}}]} as unknown as DocumentNode<SendFriendRequestMutation, SendFriendRequestMutationVariables>;
export const AcceptDeclineRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acceptDeclineRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friendRequestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptDeclineRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"friendRequestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friendRequestId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}]}}]} as unknown as DocumentNode<AcceptDeclineRequestMutation, AcceptDeclineRequestMutationVariables>;
export const GetFriendsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFriends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriends"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"friendsId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverId"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetFriendsQuery, GetFriendsQueryVariables>;
export const GetMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"receiverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"receiverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"receiverId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverId"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"edited"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"delivered"}},{"kind":"Field","name":{"kind":"Name","value":"read"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetMessagesQuery, GetMessagesQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetFriendRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFriendRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFriendRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"request"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"friendRequestId"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"}},{"kind":"Field","name":{"kind":"Name","value":"requestStatus"}},{"kind":"Field","name":{"kind":"Name","value":"requestSentTo"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetFriendRequestsQuery, GetFriendRequestsQueryVariables>;