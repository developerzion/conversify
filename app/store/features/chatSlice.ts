import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TChat } from "../types/chatTypes";
import { GetFriendsQuery } from "@/lib/types/gql/graphql";

const initialState: TChat = {
   open: false,
   selectedUser: {
      friendsId: "",
      senderId: "",
      receiverId: "",
      receiver: {
         userId: "",
         name: "",
         email: "",
         avatarUrl: "",
         username: "",
         password: "",
         createdAt: "", //new Date(0),
         updatedAt: "", //new Date(0),
      },
   },
};

export const chatSlice = createSlice({
   name: "chat",
   initialState,
   reducers: {
      openChatModal: (state) => {
         return { ...state, open: true };
      },
      closeChatModal: (state) => {
         return { ...state, open: false };
      },
      selectChatUser: (state, action: PayloadAction<GetFriendsQuery["getFriends"][number]>) => {
         const selectedUser = action.payload;
         return { ...state, selectedUser };
      },
   },
});

// Action creators are generated for each case reducer function
export const { openChatModal, closeChatModal, selectChatUser } = chatSlice.actions;

export default chatSlice.reducer;
