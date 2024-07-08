import { createSlice } from "@reduxjs/toolkit";
import { TFriendRequest } from "../types/friendRequestTypes";

const initialState: TFriendRequest = {
   open: false,
};

export const friendRequestSlice = createSlice({
   name: "friendRequest",
   initialState,
   reducers: {
      openModal: (state) => {
         return { ...state, open: true };
      },
      closeModal: (state) => {
         return { ...state, open: false };
      },
   },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = friendRequestSlice.actions;

export default friendRequestSlice.reducer;
