import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../types/userTypes";
import { UserModel } from "@/lib/types/gql/graphql";

const initialState: TUser = {
   user: {
      userId: "",
      name: "",
      email: "",
      avatarUrl: "",
      username: "",
   },
   token: "",
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      loginUser: (state, action: PayloadAction<TUser>) => {
         const { payload } = action;
         localStorage.setItem("auth_token", payload.token);
         return { ...state, ...payload };
      },
      logout: (state) => {
         localStorage.removeItem("auth_token");
         return state;
      },
      updateProfile: (state, action: PayloadAction<UserModel>) => {
         const { payload } = action;
         return { ...state, user: { ...state.user, ...payload } };
      },
   },
});

// Action creators are generated for each case reducer function
export const { loginUser, logout, updateProfile } = userSlice.actions;

export default userSlice.reducer;
