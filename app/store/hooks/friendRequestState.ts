import { useAppSelector } from "../utils/useAppSelector";
import { RootState } from "../store";
import { TFriendRequest } from "../types/friendRequestTypes";

export default function useFriendRequestState(): TFriendRequest {
   return useAppSelector((state: RootState) => state.friendRequest);
}
