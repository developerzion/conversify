export type TUserModel = {
   userId: string;
   name: string;
   email: string;
   avatarUrl: string;
   username: string;
};

export type TUser = {
   user: TUserModel;
   token: string;
};
