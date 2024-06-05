import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
