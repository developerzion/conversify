/* eslint-disable */
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

export type LoginModel = {
  __typename?: 'LoginModel';
  /** Session token */
  token: Scalars['String']['output'];
  /** Authenticated user model */
  user: UserModel;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserModel;
  loginAuth: LoginModel;
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

export type Query = {
  __typename?: 'Query';
  getUser: Array<UserModel>;
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
