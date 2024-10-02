import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BNhChNWhereInput = {
  id?: StringFilter;
  postId?: IntNullableFilter;
  voteCount?: IntNullableFilter;
};
