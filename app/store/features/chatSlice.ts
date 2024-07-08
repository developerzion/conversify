import { createSlice } from "@reduxjs/toolkit";
import { TChat } from "../types/chatTypes";

const initialState: TChat = {
   open: false,
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
   },
});

// Action creators are generated for each case reducer function
export const { openChatModal, closeChatModal } = chatSlice.actions;

export default chatSlice.reducer;
