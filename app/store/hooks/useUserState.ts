// import { useAppSelector } from '../useAppSelector';
import { useAppSelector } from "../utils/useAppSelector";
import { RootState } from "../store";
import { TUser } from "../types/userTypes";

export default function useUserState(): TUser {
   return useAppSelector((state: RootState) => state.user);
}
