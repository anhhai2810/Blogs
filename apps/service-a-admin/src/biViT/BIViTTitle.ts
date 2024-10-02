import { BIViT as TBIViT } from "../api/biViT/BIViT";

export const BIVIT_TITLE_FIELD = "title";

export const BIViTTitle = (record: TBIViT): string => {
  return record.title?.toString() || String(record.id);
};
