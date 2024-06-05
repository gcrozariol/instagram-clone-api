import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  image?: InputJsonValue;
  likes?: LikeCreateNestedManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
