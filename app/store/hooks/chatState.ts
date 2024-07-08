import { useAppSelector } from "../utils/useAppSelector";
import { RootState } from "../store";
import { TChat } from "../types/chatTypes";

export default function useChatState(): TChat {
   return useAppSelector((state: RootState) => state.chat);
}
