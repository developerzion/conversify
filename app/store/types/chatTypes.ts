import { GetFriendsQuery } from "@/lib/types/gql/graphql";

export type TChat = {
   open: boolean;
   selectedUser: GetFriendsQuery["getFriends"][number];
};
