import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  image?: InputJsonValue;
  likes?: LikeUpdateManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
