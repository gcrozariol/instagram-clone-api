import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  likes?: Array<Like>;
  updatedAt: Date;
  user?: User | null;
};
